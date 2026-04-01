import { useState } from "react";
import { getSupabase } from "../../utils/supabase";
import { trackOfferteSubmit } from "../../utils/analytics";

interface Props {
  labels: {
    name: string; email: string; phone: string; street: string;
    postalCode: string; city: string; propertyType: string; reason: string;
    preferredDate: string; preferredTime: string; hasFloorPlan: string;
    remarks: string; gdpr: string; submit: string; sending: string;
    required: string; emailInvalid: string; gdprRequired: string;
    successTitle: string; successMessage: string; errorMessage: string;
    trustResponse: string;
  };
  propertyTypes: { value: string; label: string }[];
  reasons: { value: string; label: string }[];
  timeSlots: { value: string; label: string }[];
  floorPlanOptions: { value: string; label: string }[];
  sitPhone: string; sitPhoneHref: string; sitEmail: string;
}

export default function OfferteForm({ labels, propertyTypes, reasons, timeSlots, floorPlanOptions, sitPhone, sitPhoneHref, sitEmail }: Props) {
  const saved = (() => { try { return JSON.parse(localStorage.getItem("epc_user_info") || "{}"); } catch { return {}; } })();

  const [form, setForm] = useState({
    name: saved.name || "", email: saved.email || "", phone: saved.phone || "",
    street: "", house_number: "", postal_code: "", city: "",
    property_type: "", reason: "", preferred_date: "",
    preferred_time: "geen_voorkeur", has_floor_plan: "onbekend", remarks: "", gdpr: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = labels.required;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = labels.emailInvalid;
    if (!form.phone.trim()) e.phone = labels.required;
    if (!form.street.trim()) e.street = labels.required;
    if (!form.postal_code.trim()) e.postal_code = labels.required;
    if (!form.city.trim()) e.city = labels.required;
    if (!form.gdpr) e.gdpr = labels.gdprRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSubmitError("");
    try {
      const bookingId = crypto.randomUUID();
      const bookingData = {
        id: bookingId, name: form.name.trim(), email: form.email.trim(),
        phone: form.phone.trim(), street: form.street.trim(),
        house_number: form.house_number.trim(), postal_code: form.postal_code.trim(),
        city: form.city.trim(), property_type: form.property_type || null,
        reason: form.reason || null, preferred_date: form.preferred_date || null,
        preferred_time: form.preferred_time, has_floor_plan: form.has_floor_plan,
        remarks: form.remarks.trim() || null, gdpr_consent: form.gdpr,
      };
      const supabase = getSupabase();
      const { error } = await (supabase.from as any)("bookings").insert(bookingData);
      if (error) throw error;

      supabase.functions.invoke("send-transactional-email", {
          body: { templateName: "booking-notification", recipientEmail: "info@epc-expert.be", idempotencyKey: `booking-notify-${bookingId}`, templateData: bookingData },
        });
        supabase.functions.invoke("send-transactional-email", {
          body: { templateName: "booking-confirmation", recipientEmail: form.email.trim(), idempotencyKey: `booking-confirm-${bookingId}`, templateData: { name: form.name.trim() } },
        });

      trackOfferteSubmit();
      localStorage.setItem("epc_user_info", JSON.stringify({ name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim() }));
      setSuccess(true);
    } catch {
      setSubmitError(labels.errorMessage);
    } finally {
      setSending(false);
    }
  };

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const ic = (field: string) =>
    `w-full px-4 py-2.5 rounded-lg border bg-[hsl(var(--background))] text-[hsl(var(--foreground))] focus:ring-2 focus:ring-[hsl(var(--primary))]/30 focus:border-[hsl(var(--primary))] outline-none ${errors[field] ? "border-red-500" : "border-[hsl(var(--border))]"}`;

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
          <svg className="h-10 w-10 text-[hsl(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h2 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-4">{labels.successTitle}</h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))]">{labels.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{labels.name} *</label>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} className={ic("name")} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{labels.email} *</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={ic("email")} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.phone} *</label>
            <input value={form.phone} onChange={(e) => update("phone", e.target.value)} className={ic("phone")} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">{labels.street} *</label>
              <input value={form.street} onChange={(e) => update("street", e.target.value)} className={ic("street")} />
              {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{labels.postalCode} *</label>
              <input value={form.postal_code} onChange={(e) => update("postal_code", e.target.value)} className={ic("postal_code")} />
              {errors.postal_code && <p className="text-red-500 text-xs mt-1">{errors.postal_code}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.city} *</label>
            <input value={form.city} onChange={(e) => update("city", e.target.value)} className={ic("city")} />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{labels.propertyType}</label>
              <select value={form.property_type} onChange={(e) => update("property_type", e.target.value)} className={ic("")}>
                <option value="">--</option>
                {propertyTypes.map((pt) => <option key={pt.value} value={pt.value}>{pt.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{labels.reason}</label>
              <select value={form.reason} onChange={(e) => update("reason", e.target.value)} className={ic("")}>
                <option value="">--</option>
                {reasons.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">{labels.preferredDate}</label>
              <input type="date" value={form.preferred_date} onChange={(e) => update("preferred_date", e.target.value)} className={ic("")} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{labels.preferredTime}</label>
              <select value={form.preferred_time} onChange={(e) => update("preferred_time", e.target.value)} className={ic("")}>
                {timeSlots.map((ts) => <option key={ts.value} value={ts.value}>{ts.label}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.remarks}</label>
            <textarea rows={3} value={form.remarks} onChange={(e) => update("remarks", e.target.value)} className={`${ic("")} resize-none`} />
          </div>
          <div className="flex items-start gap-3">
            <input type="checkbox" id="gdpr" checked={form.gdpr} onChange={(e) => update("gdpr", e.target.checked)} className="mt-1 h-4 w-4" />
            <label htmlFor="gdpr" className="text-sm text-[hsl(var(--muted-foreground))]">{labels.gdpr}</label>
          </div>
          {errors.gdpr && <p className="text-red-500 text-xs">{errors.gdpr}</p>}
          {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
          <button type="submit" disabled={sending} aria-busy={sending ? "true" : "false"} className="w-full py-3.5 bg-[hsl(var(--primary))] text-white font-bold text-lg rounded-lg hover:opacity-90 transition-colors disabled:opacity-50">
            {sending ? labels.sending : labels.submit}
          </button>
        </form>
      </div>
      <div className="space-y-6">
        <div className="bg-[hsl(var(--primary-light))] p-6 rounded-xl space-y-4">
          <a href={sitPhoneHref} className="flex items-center gap-3 font-semibold">{sitPhone}</a>
          <a href={`mailto:${sitEmail}`} className="flex items-center gap-3 font-semibold">{sitEmail}</a>
          <div className="flex items-center gap-3 text-sm">EP18784 & EP18782</div>
          <div className="flex items-center gap-3 text-sm">{labels.trustResponse}</div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { SERVICE_OPTIONS } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  preferredDate: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  vehicle?: string;
  service?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    preferredDate: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[\d\s()+-]{7,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.vehicle.trim())
      newErrors.vehicle = "Please enter your vehicle year, make, and model.";
    if (!formData.service)
      newErrors.service = "Please select a service.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          vehicle: "",
          service: "",
          preferredDate: "",
          notes: "",
        });

        // TODO: Track form_submission event in Google Analytics
        // gtag('event', 'form_submission', { ... });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Appointment Request Received!
        </h3>
        <p className="text-green-700">
          Thank you! We&apos;ll get back to you within one business day to
          confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div
          className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm"
          role="alert"
        >
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg text-sm ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-accent/20 focus:border-accent`}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-600 text-xs mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Phone <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 border rounded-lg text-sm ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-accent/20 focus:border-accent`}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-600 text-xs mt-1" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Email <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
      </div>

      {/* Vehicle */}
      <div>
        <label
          htmlFor="vehicle"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Vehicle (Year / Make / Model) <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          placeholder="e.g. 2020 Ford F-350"
          value={formData.vehicle}
          onChange={(e) =>
            setFormData({ ...formData, vehicle: e.target.value })
          }
          className={`w-full px-4 py-3 border rounded-lg text-sm ${
            errors.vehicle ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-accent/20 focus:border-accent`}
          aria-required="true"
          aria-invalid={!!errors.vehicle}
          aria-describedby={errors.vehicle ? "vehicle-error" : undefined}
        />
        {errors.vehicle && (
          <p
            id="vehicle-error"
            className="text-red-600 text-xs mt-1"
            role="alert"
          >
            {errors.vehicle}
          </p>
        )}
      </div>

      {/* Service Needed */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Service Needed <span className="text-accent">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          className={`w-full px-4 py-3 border rounded-lg text-sm bg-white ${
            errors.service ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-accent/20 focus:border-accent`}
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <p
            id="service-error"
            className="text-red-600 text-xs mt-1"
            role="alert"
          >
            {errors.service}
          </p>
        )}
      </div>

      {/* Preferred Date */}
      <div>
        <label
          htmlFor="preferredDate"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Preferred Date <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={(e) =>
            setFormData({ ...formData, preferredDate: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent"
        />
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-semibold text-gray-dark mb-1"
        >
          Additional Notes <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent resize-y"
          placeholder="Describe the issue or any details that would help us prepare for your visit..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px] text-lg"
      >
        {status === "submitting" ? "Sending..." : "Request Appointment"}
      </button>
    </form>
  );
}

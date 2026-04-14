import { BUSINESS } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-gray-200">
      <iframe
        title={`Map showing location of ${BUSINESS.name}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          BUSINESS.streetAddress + ", " + BUSINESS.city + ", " + BUSINESS.state + " " + BUSINESS.zip
        )}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

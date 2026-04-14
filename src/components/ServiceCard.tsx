import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
}

function ServiceIcon({ type }: { type: string }) {
  const iconClass = "w-10 h-10 text-accent";

  switch (type) {
    case "engine":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4v2H4v6l2 2v2h2v2h2v-2h4v2h2v-2h2v-2l2-2V6h-3V4h-2v2H9V4H7zm0 6a1 1 0 110-2 1 1 0 010 2zm10 0a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      );
    case "brake":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        </svg>
      );
    case "transmission":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
        </svg>
      );
    case "diagnostic":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2v11h3v9l7-12h-4l4-8z" />
        </svg>
      );
    case "maintenance":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      );
    case "fleet":
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      );
  }
}

export default function ServiceCard({
  title,
  description,
  icon,
  id,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <ServiceIcon type={icon} />
      </div>
      <h3 className="text-lg font-bold font-heading uppercase mb-2">{title}</h3>
      <p className="text-gray-mid text-sm mb-4">{description}</p>
      <Link
        href={`/services#${id}`}
        className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1"
      >
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

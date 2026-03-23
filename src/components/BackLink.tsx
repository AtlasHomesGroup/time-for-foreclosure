import Link from "next/link";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1 text-sm text-[#999] hover:text-[#E8705A] transition-colors mb-6"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      Back to games
    </Link>
  );
}

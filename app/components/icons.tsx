export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** Delicate botanical branch with leaves matching the Morrow reference style */
export function BotanicalBranch({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 90C35 75 50 50 65 15"
        stroke="var(--ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Leaf 1 */}
      <path
        d="M65 15C72 25 80 28 85 22C82 14 74 12 65 15Z"
        fill="var(--sage)"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Leaf 2 */}
      <path
        d="M52 35C42 32 34 38 32 46C40 48 48 44 52 35Z"
        fill="var(--leaf)"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Leaf 3 */}
      <path
        d="M54 48C64 48 72 56 72 64C62 64 56 58 54 48Z"
        fill="var(--sage)"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Leaf 4 */}
      <path
        d="M38 68C28 66 22 74 24 82C32 80 36 74 38 68Z"
        fill="var(--leaf)"
        stroke="var(--ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Soft floral sprig for pastel tiles */
export function FloralSprig({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M40 75C40 50 40 35 40 20"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Side leaves */}
      <path
        d="M40 55C50 50 56 56 54 62C46 64 42 60 40 55Z"
        fill="var(--sage)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path
        d="M40 42C30 38 24 44 26 50C34 52 38 48 40 42Z"
        fill="var(--leaf)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      {/* Flower bud */}
      <circle cx="40" cy="18" r="8" fill="var(--peach)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="40" cy="18" r="3" fill="var(--butter)" />
    </svg>
  );
}

/** Curved botanical frond */
export function LeafSpray({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M25 85C40 70 58 52 75 30"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M75 30C82 38 88 40 90 32C85 25 78 26 75 30Z"
        fill="var(--sage)"
        stroke="var(--ink)"
        strokeWidth="1.6"
      />
      <path
        d="M58 46C50 40 42 46 44 54C52 54 56 50 58 46Z"
        fill="var(--leaf)"
        stroke="var(--ink)"
        strokeWidth="1.6"
      />
      <path
        d="M42 62C50 64 56 70 54 78C46 76 42 70 42 62Z"
        fill="var(--sage)"
        stroke="var(--ink)"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** White circular arrow button from Morrow reference */
export function CircularArrowButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-[0_4px_12px_rgba(74,15,58,0.08)] group-hover:scale-105 group-hover:shadow-[0_6px_16px_rgba(74,15,58,0.12)] transition-all duration-200 shrink-0 ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  );
}

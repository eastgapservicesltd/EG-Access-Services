import { Link } from "react-router";
import { RingMark } from "../ui/RingMark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="EG Access Services, home">
      <RingMark className="size-10 shrink-0" />
      <span className="leading-none">
        <span className="font-wide block text-lg font-bold tracking-wide text-white">EG ACCESS</span>
        <span className="mt-1 block text-[0.7rem] font-medium tracking-[0.3em] text-teal-300">SERVICES INC</span>
      </span>
    </Link>
  );
}

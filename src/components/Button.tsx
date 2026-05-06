import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-yellow-500 text-gray-900 hover:bg-yellow-400 focus:ring-yellow-500",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

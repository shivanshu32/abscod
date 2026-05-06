import Link from "next/link";
import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Lightbulb,
  Plug,
  Building,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Lightbulb,
  Plug,
  Building,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Code;

  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
        <Icon className="h-7 w-7 text-yellow-600 group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

      <span className="inline-flex items-center text-yellow-600 font-semibold group-hover:text-yellow-500">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

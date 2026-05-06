import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
      <Quote className="absolute top-6 right-6 h-10 w-10 text-yellow-100" />

      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 text-yellow-500 fill-yellow-500"
          />
        ))}
      </div>

      <p className="text-gray-700 mb-6 relative z-10">&ldquo;{content}&rdquo;</p>

      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

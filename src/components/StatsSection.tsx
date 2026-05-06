import { STATS } from "@/lib/constants";

export default function StatsSection() {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-800 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

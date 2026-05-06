import { Search, PenTool, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your requirements, business goals, and target audience to create a comprehensive project roadmap.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our designers create intuitive UI/UX designs that align with your brand and delight your users.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our expert developers build your solution using agile methodology with regular updates and feedback loops.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy your solution with thorough testing, ensuring a smooth and successful launch.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "We provide ongoing maintenance, updates, and support to keep your software running optimally.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures project success and client satisfaction
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

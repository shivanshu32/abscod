const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:border-yellow-300 hover:shadow-md transition-all cursor-default"
            >
              <span className="text-gray-700 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

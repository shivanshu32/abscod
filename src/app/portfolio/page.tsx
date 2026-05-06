import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  Smartphone,
  Globe,
  ShoppingCart,
  Building2,
  Heart,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio - Our Work",
  description:
    "Explore our portfolio of successful software development projects. See how we've helped businesses transform with custom software, web apps, and mobile solutions.",
  openGraph: {
    title: "Portfolio | Abscod Informatics",
    description: "Explore our portfolio of successful software development projects.",
    url: `${SITE_CONFIG.url}/portfolio`,
  },
};

const projects = [
  {
    title: "HealthConnect Platform",
    category: "Healthcare",
    icon: Heart,
    description:
      "A comprehensive telemedicine platform enabling virtual consultations, appointment scheduling, and electronic health records management.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    results: ["50% reduction in wait times", "10,000+ active users", "HIPAA compliant"],
  },
  {
    title: "FinanceHub Dashboard",
    category: "Finance",
    icon: Building2,
    description:
      "Real-time financial analytics dashboard with AI-powered insights, portfolio management, and automated reporting.",
    technologies: ["Next.js", "Python", "TensorFlow", "MongoDB"],
    results: ["40% faster decisions", "99.9% uptime", "SOC 2 certified"],
  },
  {
    title: "ShopEase E-commerce",
    category: "E-commerce",
    icon: ShoppingCart,
    description:
      "Scalable e-commerce platform with advanced inventory management, multi-vendor support, and seamless payment integration.",
    technologies: ["React", "Node.js", "Stripe", "Redis"],
    results: ["200% sales increase", "50K+ products", "3s load time"],
  },
  {
    title: "EduLearn LMS",
    category: "Education",
    icon: GraduationCap,
    description:
      "Interactive learning management system with video courses, live classes, progress tracking, and certification.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    results: ["100K+ students", "500+ courses", "95% completion rate"],
  },
  {
    title: "RideShare App",
    category: "Transportation",
    icon: Smartphone,
    description:
      "On-demand ride-sharing mobile application with real-time tracking, fare estimation, and driver management.",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    results: ["1M+ rides", "50K+ drivers", "4.8 star rating"],
  },
  {
    title: "PropertyPro Real Estate",
    category: "Real Estate",
    icon: Globe,
    description:
      "Property listing and management platform with virtual tours, mortgage calculator, and agent dashboard.",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    results: ["10K+ listings", "500+ agents", "30% faster sales"],
  },
];

const industries = [
  "Healthcare",
  "Finance",
  "E-commerce",
  "Education",
  "Real Estate",
  "Transportation",
  "Logistics",
  "Entertainment",
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-yellow-400 font-semibold mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects across various industries. We&apos;ve helped
            businesses of all sizes achieve their digital transformation goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-slate-800 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-700 px-6 py-2 rounded-full font-medium hover:bg-yellow-100 hover:text-yellow-800 transition-colors cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of our best work across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <project.icon className="h-20 w-20 text-yellow-500/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-500 font-medium mb-2">KEY RESULTS:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
              { step: "02", title: "Design", description: "Creating intuitive UI/UX and system architecture" },
              { step: "03", title: "Development", description: "Agile development with regular updates and demos" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let&apos;s discuss how we can help bring your vision to life with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Portfolio",
            description: "Explore our portfolio of successful software development projects.",
            url: `${SITE_CONFIG.url}/portfolio`,
            publisher: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
            },
          }),
        }}
      />
    </>
  );
}

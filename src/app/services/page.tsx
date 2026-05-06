import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
} from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, SITE_CONFIG, STATS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
};

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Explore our comprehensive software development services including custom software, web apps, mobile apps, cloud solutions, UI/UX design, and more.",
  openGraph: {
    title: "Software Development Services | Abscod Informatics",
    description: "Explore our comprehensive software development services.",
    url: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end software development
            services that help businesses innovate, scale, and succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Stats */}
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

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon] || Code;
              return (
                <div
                  key={category.slug}
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service) => (
                      <li key={service.slug} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {service.name}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${category.slug}`}
                    className="text-yellow-600 font-semibold inline-flex items-center hover:text-yellow-500"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert solutions tailored to your business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-500 transition-colors">
                      <Icon className="h-6 w-6 text-yellow-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-yellow-600 font-semibold inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through our proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Tailored Solutions", description: "Custom solutions aligned with your business objectives" },
              { title: "Cutting-Edge Technology", description: "Modern, scalable, and future-proof applications" },
              { title: "Transparent Communication", description: "Regular updates and clear documentation" },
              { title: "Quality Assurance", description: "Rigorous testing for reliable software" },
              { title: "On-Time Delivery", description: "Agile methodology ensures timely delivery" },
              { title: "Ongoing Support", description: "Continuous maintenance and support" },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Contact us today for a free consultation and let&apos;s discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              View Our Work
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
            "@type": "ItemList",
            itemListElement: SERVICES.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                url: `${SITE_CONFIG.url}/services/${service.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  Send,
  Phone,
  Mail,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.name}`,
      description: service.metaDescription,
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Code;
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon className="h-4 w-4 mr-2" />
                Professional {service.shortTitle} Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">{service.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#features"
                  className="border-2 border-white/30 hover:border-yellow-500 text-white px-8 py-4 rounded-lg font-bold transition-all text-center"
                >
                  Learn More
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {["Free Consultation", "Expert Team", "On-Time Delivery"].map((item) => (
                  <div key={item} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Contact</h3>
              <p className="text-gray-600 mb-6">Get a free quote for your project</p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive {service.shortTitle.toLowerCase()} services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Expert implementation with industry best practices and modern technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Benefits of Our {service.shortTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Partner with us to unlock the full potential of your business through expert {service.shortTitle.toLowerCase()} services.
              </p>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our {service.shortTitle} Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", description: "Creating detailed roadmap and architecture" },
              { step: "03", title: "Execution", description: "Agile development with regular updates" },
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

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-gray-600">Explore other services that complement {service.shortTitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Code;
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors">
                    <RelatedIcon className="h-6 w-6 text-yellow-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{related.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Get Started with {service.shortTitle}?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Contact us today for a free consultation and let&apos;s discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Get Free Quote
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

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            url: `${SITE_CONFIG.url}/services/${service.slug}`,
            provider: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
          }),
        }}
      />
    </>
  );
}

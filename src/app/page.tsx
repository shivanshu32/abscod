"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Car,
  GraduationCap,
  ShoppingBag,
  Heart,
  Plane,
  Landmark,
  Truck,
  Send,
  Phone,
  Mail,
  Star,
  Quote,
  Rocket,
  Users,
  Clock,
  Award,
  Play,
} from "lucide-react";
import { SERVICES, TESTIMONIALS, SITE_CONFIG, STATS, INDUSTRIES } from "@/lib/constants";

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Car,
  GraduationCap,
  ShoppingBag,
  Heart,
  Plane,
  Landmark,
  Truck,
};

const statIcons = [Rocket, Users, Clock, Award];

export default function Home() {
  return (
    <>
      {/* Hero Section - VerveLogic Style with Image Grid */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                <span className="text-orange-500">Custom Mobile App</span>
                <br />
                Development Company
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {SITE_CONFIG.name} is a mobile app development company that offers brilliant and inventive software services that help businesses to establish themselves in their respective industries.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center shadow-lg shadow-orange-500/30"
                >
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-center p-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <Phone className="h-8 w-8" />
                      </div>
                      <p className="text-sm font-medium">Mobile Apps</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl h-32 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-medium">Enterprise</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl h-32 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <ShoppingBag className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-medium">E-Commerce</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-center p-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <p className="text-sm font-medium">Startups</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-8 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white mb-6 font-medium">
            Trusted by the World&apos;s Leading Startups and Enterprises since {SITE_CONFIG.foundedYear}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"].map((client, index) => (
              <div key={index} className="text-white font-bold text-xl tracking-wider">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Two Column with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Users className="h-20 w-20 text-orange-400" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 mt-8 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Rocket className="h-20 w-20 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">10+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-orange-500 font-semibold mb-2">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                India&apos;s Most Trusted <span className="text-orange-500">Mobile App</span> Development Company
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {SITE_CONFIG.name} is a leading mobile app development company that offers brilliant and inventive software services that help businesses to establish themselves in their respective industries.
                </p>
                <p>
                  The quality of being sincere and having strong moral principles is what is being followed at {SITE_CONFIG.name}. Unlike other software development companies, we value our clients and their services by delivering the solution in stated time and allocated budget.
                </p>
                <p>
                  We build cross platform mobile applications, hybrid mobile applications, IoT development, android mobile app development, iOS mobile app development, and digital marketing services.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Orange Background with Icons */}
      <section className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
              const Icon = statIcons[index] || Rocket;
              return (
                <div key={index} className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section - Image Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Diverse Industry Verticals We Serve In
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have expertise in developing solutions for various industry verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, index) => {
              const Icon = industryIcons[industry.icon] || Building2;
              const colors = [
                "from-purple-500 to-purple-700",
                "from-blue-500 to-blue-700",
                "from-teal-500 to-teal-700",
                "from-orange-500 to-orange-700",
                "from-pink-500 to-pink-700",
                "from-indigo-500 to-indigo-700",
                "from-green-500 to-green-700",
                "from-red-500 to-red-700",
              ];
              return (
                <Link
                  key={index}
                  href={`/industries/${industry.slug}`}
                  className="group relative rounded-2xl overflow-hidden h-48"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]}`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
                    <Icon className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-center text-sm">{industry.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Says About Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from businesses we&apos;ve helped succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Posts Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold mb-2">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Post
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest insights and updates from our team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Mobile App Development in 2024",
                category: "Technology",
                date: "Jan 15, 2024",
              },
              {
                title: "How AI is Transforming Software Development",
                category: "AI & ML",
                date: "Jan 10, 2024",
              },
              {
                title: "Best Practices for E-commerce App Design",
                category: "Design",
                date: "Jan 5, 2024",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                    <Rocket className="h-10 w-10 text-orange-400" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-orange-500 text-sm font-medium">{post.category}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href="/blog"
                    className="text-orange-500 font-semibold inline-flex items-center text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let&apos;s discuss how we can help you achieve your goals with custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold transition-all"
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
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            logo: `${SITE_CONFIG.url}/logo.png`,
            description: SITE_CONFIG.description,
            email: SITE_CONFIG.email,
            telephone: SITE_CONFIG.phone,
            sameAs: [
              "https://linkedin.com/company/abscod",
              "https://twitter.com/abscod",
              "https://github.com/abscod",
            ],
          }),
        }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Target,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  Calendar,
  Building2,
  Rocket,
  Heart,
  Lightbulb,
  Shield,
} from "lucide-react";
import { SITE_CONFIG, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Abscod Informatics - a leading software development company with a passion for innovation and excellence.",
  openGraph: {
    title: "About Us | Abscod Informatics",
    description: "Learn about Abscod Informatics - a leading software development company.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their goals as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain transparency and honesty in all our business relationships.",
  },
];

const milestones = [
  { year: "2014", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
  { year: "2016", title: "100+ Projects", description: "Reached milestone of 100 successful project deliveries" },
  { year: "2018", title: "Global Expansion", description: "Opened offices in UK and UAE to serve international clients" },
  { year: "2020", title: "500+ Clients", description: "Grew our client base to over 500 satisfied customers" },
  { year: "2022", title: "1000+ Projects", description: "Delivered over 1000 successful projects worldwide" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a leading mobile app development company" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-yellow-400 font-semibold mb-4">Design Your Web for a Better Online Future</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Look High, Think Big!
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming
            businesses through innovative software solutions since {SITE_CONFIG.foundedYear}.
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

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {SITE_CONFIG.name} is a leading mobile app development and web design company 
                  that offers brilliant and inventive software services that help businesses 
                  to establish themselves in their respective industries.
                </p>
                <p>
                  With offices across the UK, USA, UAE and India, we are among the top IT 
                  outsourcing companies. The quality of being sincere and having strong moral 
                  principles is what is being followed at {SITE_CONFIG.name}.
                </p>
                <p>
                  Unlike other software development companies, we value our clients and their 
                  services by delivering the solution in stated time and allocated budget. We 
                  build cross platform mobile applications, hybrid mobile applications, IoT 
                  development, android mobile app development, iOS mobile app development, 
                  and digital marketing services.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold transition-all inline-flex items-center"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-lg font-bold transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
                <Image
                  src="/logo.png"
                  alt={SITE_CONFIG.name}
                  width={300}
                  height={100}
                  className="mx-auto mb-8"
                />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Quality Oriented", icon: Award },
                    { label: "Client Focused", icon: Users },
                    { label: "Innovative", icon: Lightbulb },
                    { label: "Professional", icon: Building2 },
                    { label: "Dynamic", icon: Rocket },
                    { label: "Global Reach", icon: Globe },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                      <item.icon className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive 
                growth, efficiency, and competitive advantage. We are committed to delivering 
                exceptional software products that transform ideas into reality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted global technology partner, recognized for our innovation, 
                quality, and commitment to client success. We envision a future where every 
                business can leverage cutting-edge technology to achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-slate-50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-yellow-500 font-bold text-lg">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving clients worldwide from our offices across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.offices.map((office, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{office.city}</h3>
                <p className="text-gray-500 mb-3">{office.country}</p>
                <p className="text-sm text-gray-600">{office.phone}</p>
                <p className="text-sm text-yellow-600">{office.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Let&apos;s discuss how we can help transform your business with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Contact Us Today
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
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            logo: `${SITE_CONFIG.url}/logo.png`,
            description: SITE_CONFIG.description,
            foundingDate: SITE_CONFIG.foundedYear.toString(),
            email: SITE_CONFIG.email,
            telephone: SITE_CONFIG.phone,
          }),
        }}
      />
    </>
  );
}

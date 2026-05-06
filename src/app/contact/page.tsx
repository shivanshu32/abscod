"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-yellow-400 font-semibold mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
            Get a free consultation today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Phone className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-600 text-sm hover:text-yellow-600">
                {SITE_CONFIG.phone}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Mail className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-600 text-sm hover:text-yellow-600">
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <MessageSquare className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Skype</h3>
              <span className="text-gray-600 text-sm">{SITE_CONFIG.skype}</span>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
              <span className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Request a Free Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                  />
                </div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-600"
                >
                  <option value="">Select Service</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="ecommerce">E-Commerce Solution</option>
                  <option value="software">Custom Software Development</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="other">Other</option>
                </select>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white text-gray-600"
                >
                  <option value="">Select Budget Range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none bg-white"
                />
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Your Request
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Global Offices
              </h2>
              <p className="text-gray-600 mb-8">
                With offices across the globe, we&apos;re always available to serve you better.
                Reach out to the office nearest to you.
              </p>

              <div className="space-y-6">
                {SITE_CONFIG.offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {office.city}, {office.country}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          <Phone className="h-4 w-4 inline mr-1" />
                          {office.phone}
                        </p>
                        <p className="text-yellow-600 text-sm mt-1">
                          <Mail className="h-4 w-4 inline mr-1" />
                          {office.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-slate-800 mb-4">
                  Our team is available 24/7 for urgent inquiries.
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on complexity. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines after understanding your requirements.",
              },
              {
                q: "What is your pricing model?",
                a: "We offer flexible pricing models including fixed-price for well-defined projects and time-and-materials for evolving requirements. Contact us for a customized quote.",
              },
              {
                q: "Do you provide post-launch support?",
                a: "Yes, we offer comprehensive maintenance and support packages to ensure your software runs smoothly after launch. This includes bug fixes, updates, and feature enhancements.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We can augment your team with our skilled developers or work alongside your existing team to deliver your project successfully.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let&apos;s transform your ideas into reality. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

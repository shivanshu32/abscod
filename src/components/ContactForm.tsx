"use client";

import { useState } from "react";
import Button from "./Button";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="">Select a service</option>
            <option value="custom-software">Custom Software Development</option>
            <option value="web-app">Web Application Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="cloud-devops">Cloud Solutions & DevOps</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="consulting">Software Consulting</option>
            <option value="api">API Development & Integration</option>
            <option value="enterprise">Enterprise Solutions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <div className="mt-8">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        We typically respond within 24 hours. Your information is secure and will never be shared.
      </p>
    </form>
  );
}

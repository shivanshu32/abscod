import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read our privacy policy to understand how Abscod Informatics collects, uses, and protects your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              {SITE_CONFIG.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, company name,
                and other contact information you provide when filling out forms.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including
                pages visited, time spent, and navigation patterns.
              </li>
              <li>
                <strong>Device Data:</strong> Browser type, operating system, IP address, and
                device identifiers.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services for analytics, marketing, and other purposes.
              These services may collect information about your use of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-yellow-600 hover:text-yellow-500">
                {SITE_CONFIG.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

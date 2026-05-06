import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read our terms of service to understand the terms and conditions for using Abscod Informatics services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using the services of {SITE_CONFIG.name}, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not
              use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-600 mb-4">
              {SITE_CONFIG.name} provides software development services including but not
              limited to custom software development, web application development, mobile
              app development, cloud solutions, and consulting services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise agreed in writing, all intellectual property rights in the
              deliverables created by {SITE_CONFIG.name} shall be transferred to the client
              upon full payment of all fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
            <p className="text-gray-600 mb-4">
              We maintain strict confidentiality of all client information and project
              details. We will not disclose any confidential information to third parties
              without your prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              Payment terms are specified in individual project agreements. Unless otherwise
              stated, invoices are due within 30 days of receipt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, {SITE_CONFIG.name} shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages
              arising out of or related to our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty</h2>
            <p className="text-gray-600 mb-4">
              We warrant that our services will be performed in a professional manner
              consistent with industry standards. We provide a warranty period as specified
              in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate the service agreement with written notice as
              specified in the project agreement. Upon termination, client shall pay for
              all work completed up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about these Terms of Service, please contact us at{" "}
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

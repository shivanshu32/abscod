import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Abscod Informatics"
              width={180}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            {/* Office Locations */}
            <h4 className="text-white font-semibold mt-6 mb-3">Our Offices</h4>
            <div className="space-y-2">
              {SITE_CONFIG.offices.map((office, index) => (
                <div key={index} className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">{office.city}, {office.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

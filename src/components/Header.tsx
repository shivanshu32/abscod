"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SERVICES, SERVICE_CATEGORIES, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center hover:text-orange-400 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center hover:text-orange-400 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Abscod Informatics - Software Development Company"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors"
              >
                Home
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-100 p-6 mt-2">
                    <div className="grid grid-cols-2 gap-6">
                      {SERVICE_CATEGORIES.map((category) => (
                        <div key={category.slug}>
                          <Link
                            href={`/services/${category.slug}`}
                            className="font-bold text-slate-900 hover:text-orange-500 mb-2 block"
                          >
                            {category.title}
                          </Link>
                          <ul className="space-y-1">
                            {category.services.slice(0, 4).map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-4 pt-4">
                      <Link
                        href="/services"
                        className="text-orange-500 font-semibold hover:text-orange-600"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors"
              >
                Portfolio
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors"
              >
                Contact Us
              </Link>

              <Link
                href="/contact"
                className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div>
                  <button
                    className="flex items-center text-slate-700 hover:text-orange-500 font-medium w-full py-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-orange-500">
                      <Link
                        href="/services"
                        className="block text-slate-600 hover:text-orange-500 font-medium py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        All Services
                      </Link>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-gray-500 hover:text-orange-500 text-sm py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  className="text-slate-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>

                <Link
                  href="/about"
                  className="text-slate-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>

                <Link
                  href="/contact"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

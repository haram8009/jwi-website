"use client";
import Link from "next/link";
import { Send } from "lucide-react";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 text-center pt-40">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
          <nav className="text-gray-500 text-sm flex justify-center gap-2">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-700 font-semibold">Contact Us</span>
          </nav>
        </div>
      </section>
      {/* Info Cards */}
      <ContactInfoCards />

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* 폼 */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Send us a message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>{" "}
          {/* 지도 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1493874895464!2d-117.9032185238289!3d33.86004072785392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd673581548fd%3A0xe67001a2e16ffda4!2s1561%20E%20Orangethorpe%20Ave%20Suite%20205%2C%20Fullerton%2C%20CA%2092831!5e0!3m2!1sen!2sus!4v1749682068087!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

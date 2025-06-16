"use client";
import Link from "next/link";

import LinkButton from "@/components/Animated/LinkButton";
import FlyInText from "@/components/Animated/FlyInText";
import ServiceGrid from "@/components/services/ServiceGrid";
import Button from "@/components/Animated/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-30 h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center text-center px-4 h-full text-left">
          <FlyInText direction="left" className="mb-8">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Adding Values to your Cargo
              </h1>
              <FlyInText direction="bottom">
                Global logistics & supply chain solutions tailored to your
                business.
              </FlyInText>
              <LinkButton href="/contact">Get a Quote</LinkButton>
            </div>
          </FlyInText>
        </div>
      </section>

      {/* Services */}
      <ServiceGrid />
      {/* <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-10">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ocean Freight",
                desc: "Global shipping via FCL/LCL containers.",
              },
              {
                title: "Air Freight",
                desc: "Fast and reliable international air cargo.",
              },
              {
                title: "Trucking",
                desc: "Flexible inland transportation nationwide.",
              },
              {
                title: "Rail & Intermodal",
                desc: "Cost-effective rail freight across regions.",
              },
              {
                title: "Warehousing",
                desc: "3PL, fulfillment, and inventory storage.",
              },
              {
                title: "Customs Brokerage",
                desc: "Clearance services for seamless trade.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block mt-10 text-blue-700 hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </section> */}

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            About James Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With decades of experience, James Worldwide connects continents
            through ocean, air, and inland logistics — making shipping simple,
            fast, and secure.
          </p>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Global Network. Local Expertise.
          </h2>
          <p className="text-gray-600">
            From Asia to the Americas, our experts and partners operate in over
            50 countries, giving your business global reach with local
            knowledge.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Need help with international logistics?
          </h2>
          <p className="mb-6">
            Let’s create efficient, end-to-end solutions for your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-800 px-6 py-3 rounded font-semibold hover:bg-gray-100"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}

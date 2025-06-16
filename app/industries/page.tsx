"use client";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-blue-50 py-20 text-center pt-30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Industries We Serve</h1>
          <p className="text-gray-700 text-lg">Tailored logistics solutions for diverse industries worldwide.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Garment & Apparel",
            "Electronics",
            "Chemicals",
            "Pharmaceuticals",
            "Automotive & Auto Parts",
            "Food & Beverages",
            "Agriculture",
            "PET Resin & Sugar",
            "Furniture & Oversized Cargo"
          ].map((industry, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-blue-800 mb-2">{industry}</h3>
              <p className="text-gray-600">Expert logistics support for {industry.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Don’t see your industry?</h2>
          <Link href="/contact" className="inline-block bg-white text-blue-800 px-6 py-3 rounded hover:bg-gray-100 transition">
            Talk to a Specialist
          </Link>
        </div>
      </section>
    </>
  );
}

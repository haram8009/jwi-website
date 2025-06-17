"use client";
import Link from "next/link";
import IndustryTile from "@/components/industries/IndustryTile";
import { industries, ratioCycle } from "@/data/industries"; // 데이터 분리

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 py-20 text-center pt-30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Industries We Serve
          </h1>
          <p className="text-gray-700 text-lg">
            Tailored logistics solutions for diverse industries worldwide.
          </p>
        </div>
      </section>

      {/* Industry Tiles */}
      <section className="bg-white">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 max-w-7xl mx-auto">
          {industries.map((it, i) => (
            <IndustryTile
              key={it.title}
              {...it}
              ratio={ratioCycle[i % ratioCycle.length]}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Don’t see your industry?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-800 px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>

      {/* Back-to-Top FAB */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

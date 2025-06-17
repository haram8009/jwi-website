"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndustryTile from "@/components/industries/IndustryTile";
import { industries } from "@/data/industries"; // 데이터 분리

export default function IndustriesPage() {
  const [selected, setSelected] = useState<(typeof industries)[number] | null>(
    null
  );
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected]);

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
      <section className="py-16 bg-white">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 max-w-7xl mx-auto">
          {industries.map((it, i) => (
            <div className="mb-4" key={it.slug} onClick={() => setSelected(it)}>
              <IndustryTile {...it} ratio={"square"} index={i} />
            </div>
          ))}
          <IndustryTile
            key={"more-industries"}
            title="More Industries"
            desc="Explore our full range of industry solutions."
            img="/assets/industries/more.jpg"
            href="/contact"
            ratio={"long"}
            index={industries.length}
          />
        </div>
      </section>

      {/* Detail Section */}
      <div ref={detailRef}>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.section
              key={selected.slug}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.45 }}
              className="bg-gray-50 border-t border-gray-200 mt-8 min-h-96 flex"
            >
              <div className="max-w-4xl mx-auto p-8">
                <button
                  onClick={() => setSelected(null)}
                  className="mb-6 text-blue-600 underline"
                >
                  ← Back to industries
                </button>

                <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
                {selected.img && (
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="w-full h-auto rounded-xl shadow mb-8"
                  />
                )}

                {/* Markdown → HTML 렌더링 예시 */}
                <article
                  className="prose lg:prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selected.body }}
                />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

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

"use client";
import dynamic from "next/dynamic";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef } from "react";
import { industries } from "@/data/industries";
import Link from "next/link";
import { AnimatePresence, motion, animate } from "framer-motion";

const IndustryTile = dynamic(
  () => import("@/components/industries/IndustryTile"),
  { ssr: false }
);

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment(); // ex) "furniture" | null
  const detailRef = useRef<HTMLDivElement>(null);
  const prev = useRef<string | null>(null);
  // segment 생기면 디테일 영역으로 부드러운 스크롤
  // 부드러운 스크롤 (맞춤 시간 / ease)
  useEffect(() => {
    // ── 1) 첫 마운트 ──
    if (prev.current === null && !segment) {
      prev.current = "init"; // 값만 기록
      window.scrollTo(0, 0); // 페이지 상단으로 스크롤
      return;
    }

    // ── 2) 내부에서 slug 가 바뀔 때만 스크롤 ──
    if (prev.current !== segment && segment && detailRef.current) {
      const targetY =
        detailRef.current.getBoundingClientRect().top + window.scrollY - 16;
      animate(window.scrollY, targetY, {
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }

    // ── 3) slug → null(뒤로가기) 이면 아무 것도 안 함(원래 위치 유지) ──
    prev.current = segment ?? null;
  }, [segment]);

  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 py-20 text-center pt-40">
        <h1 className="text-4xl font-bold text-blue-800">
          Industries We Serve
        </h1>
        <p className="text-gray-700 mt-2">
          Tailored logistics solutions for diverse industries worldwide.
        </p>
      </section>

      {/* Industry Tiles */}
      <section className="py-16 bg-white">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 max-w-7xl mx-auto">
          {industries.map((it, i) => (
            <IndustryTile
              key={it.slug}
              scroll={false}
              {...it}
              ratio="square"
              index={i}
              href={`/industries/${it.slug}`}
            />
          ))}

          <IndustryTile
            key={"more-industries"}
            title="More Industries"
            desc="Explore our full range of industry solutions."
            img="/assets/industries/more.jpg"
            ratio={"long"}
            href="/contact"
            index={industries.length}
          />
        </div>
      </section>

      {/* Detail Section */}
      <div ref={detailRef}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
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

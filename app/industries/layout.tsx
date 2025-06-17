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

  // segment 생기면 디테일 영역으로 부드러운 스크롤
  // 부드러운 스크롤 (맞춤 시간 / ease)
  useEffect(() => {
    if (segment && detailRef.current) {
      const targetY =
        detailRef.current.getBoundingClientRect().top + window.scrollY - 16;
      animate(window.scrollY, targetY, {
        duration: 0.7, // 원하는 만큼 조절
        ease: [0.25, 0.8, 0.25, 1],
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }
  }, [segment]);

  return (
    <>
      {/* ─── 헤더+타일 리스트 (항상 유지) ─── */}
      <section className="bg-blue-50 py-20 text-center pt-40">
        <h1 className="text-4xl font-bold text-blue-800">
          Industries We Serve
        </h1>
        <p className="text-gray-700 mt-2">
          Tailored logistics solutions for diverse industries worldwide.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 px-4 max-w-7xl mx-auto">
          {industries.map((it, i) => (
            <Link key={it.slug} href={`/industries/${it.slug}`} scroll={false}>
              <IndustryTile
                {...it}
                ratio="square"
                index={i}
                href={`/industries/${it.slug}`}
              />
            </Link>
          ))}
          <Link key={"more-industries"} href="/contact">
            <IndustryTile
              title="More Industries"
              desc="Explore our full range of industry solutions."
              img="/assets/industries/more.jpg"
              ratio={"long"}
              href="/contact"
              index={industries.length}
            />
          </Link>
        </div>
      </section>

      {/* ─── 디테일 자리 ─── */}
      <div ref={detailRef}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </div>

      {/* Back-to-Top 버튼 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 w-10 h-10 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition"
      >
        ↑
      </button>
    </>
  );
}

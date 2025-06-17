"use client";
import { motion } from "framer-motion";
import type { Industry } from "@/data/industries"; // 타입 정의가 있다면

export default function IndustryDetailClient({ item }: { item: Industry }) {
  return (
    <motion.section
      key={item.slug}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.45 }}
      className="bg-gray-50 border-t border-gray-200 mt-8"
    >
      <div className="max-w-4xl mx-auto p-8">
        <a href="/industries" className="text-blue-600 underline">
          ← Back to industries
        </a>

        <h2 className="text-3xl font-bold my-4">{item.title}</h2>
        {item.img && (
          <img
            src={item.img}
            alt={item.title}
            className="rounded-xl shadow mb-8"
          />
        )}

        <article
          className="prose lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: item.body }}
        />
      </div>
    </motion.section>
  );
}

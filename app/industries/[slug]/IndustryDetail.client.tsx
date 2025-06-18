"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustryDetailClient({ item }: { item: Industry }) {
  return (
    <motion.section
      key={item.slug}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.45 }}
      className="bg-gray-50 border-t border-gray-200 mt-8 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <a href="/industries" className="text-blue-600 underline mb-4 inline-block">
          ← Back to industries
        </a>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* 왼쪽: 이미지 (절반) */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <Image
              src={item.cover || item.img}
              alt={item.title}
              width={700}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-[280px] md:h-[390px] lg:h-[440px]"
              priority
            />
          </div>
          {/* 오른쪽: 내용 */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-3xl font-extrabold text-slate-800">{item.title}</h2>
            <p className="text-lg text-slate-600 font-medium">{item.summary}</p>
            {item.keyFactors && (
              <div>
                <h3 className="text-lg font-bold text-pink-700 tracking-wide mb-2">Key Factors</h3>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-base">
                  {item.keyFactors.map((factor, i) => (
                    <li key={i} className="">{factor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

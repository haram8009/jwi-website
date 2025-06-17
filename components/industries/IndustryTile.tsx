// components/industries/IndustryTile.tsx
"use client";
import { motion } from "framer-motion"; // 👈 추가
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type Ratio = "square" | "portrait" | "landscape" | "tall" | "wide"; // ← 4종류

type Props = {
  title: string;
  desc?: string;
  img?: string | StaticImport;
  href?: string;
  ratio?: Ratio;
  /** index 값을 받아 지연 시간으로 활용 */
  index?: number;
};

export default function IndustryTile({
  title,
  desc,
  img = "/assets/industries/default.jpg",
  href = "/industries",
  ratio = "square",
  index = 0, // 기본값
}: Props) {
  const ratioClass: Record<Ratio, string> = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    tall: "aspect-[2/3]",
    wide: "aspect-[16/9]",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // 뷰포트 20 % 보이면 실행
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4 break-inside-avoid"
    >
      <Link
        href={href}
        role="link"
        aria-label={`${title} details`}
        className={`block mb-4 break-inside-avoid ${ratioClass[ratio]} relative overflow-hidden rounded-lg shadow-md group`}
      >
        <Image
          src={img}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
        <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white">
          <header>
            <h3 className="font-bold text-sm lg:text-base">{title}</h3>
            <p className="mt-1 text-[11px] lg:text-xs leading-snug line-clamp-4 opacity-80">
              {desc}
            </p>
          </header>
        </div>
      </Link>
    </motion.div>
  );
}

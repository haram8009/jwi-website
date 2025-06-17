// components/industries/IndustryTile.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Ratio = "square" | "portrait" | "landscape" | "tall" | "wide" | "long";

interface Props {
  title: string;
  desc?: string;
  img?: string | StaticImport;
  href?: string;
  ratio?: Ratio;
  index?: number;
}

export default function IndustryTile({
  title,
  desc,
  img = "/assets/industries/default.jpg",
  href = "/industries",
  ratio = "square",
  index = 0,
}: Props) {
  const pathname = usePathname();
  const samePage = href === pathname;

  const ratioClass: Record<Ratio, string> = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    tall: "aspect-[2/3]",
    wide: "aspect-[16/9]",
    long: "aspect-[8/17]",
  };

  // 공통 카드 내용
  const CardInner = (
    <>
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
          {desc && (
            <p className="mt-1 text-[11px] lg:text-xs leading-snug line-clamp-4 opacity-80">
              {desc}
            </p>
          )}
        </header>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4 break-inside-avoid"
    >
      {samePage ? (
        /* 현재 페이지와 href가 같으면 네비게이션 비활성화 */
        <div
          role="button"
          aria-label={`${title} details`}
          className={`block relative overflow-hidden rounded-lg shadow-md group cursor-pointer ${ratioClass[ratio]}`}
        >
          {CardInner}
        </div>
      ) : (
        /* 다른 경로일 때만 <Link> 사용 */
        <Link
          href={href}
          aria-label={`${title} details`}
          className={`block relative overflow-hidden rounded-lg shadow-md group ${ratioClass[ratio]}`}
        >
          {CardInner}
        </Link>
      )}
    </motion.div>
  );
}

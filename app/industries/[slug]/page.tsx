import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import IndustryDetailClient from "./IndustryDetail.client";

// 정적 경로
export function generateStaticParams() {
  return industries
    .filter(i => typeof i.slug === "string" && i.slug.length) // 문자열만
    .map(i => ({ slug: i.slug }));
}
export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = industries.find((i) => i.slug === params.slug);
  if (!item) notFound();

  // 서버에서 데이터만 넘기고, 실제 UI는 클라이언트 컴포넌트로
  return <IndustryDetailClient item={item} />;
}

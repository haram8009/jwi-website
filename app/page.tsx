"use client";
import Link from "next/link";

import LinkButton from "@/components/Animated/LinkButton";
import FlyInText from "@/components/Animated/FlyInText";
import ServiceGrid from "@/components/services/ServiceGrid";
import InfiniteVerticalCarousel from "@/components/common/InfiniteVerticalCarousel";
import IndustryTile from "@/components/industries/IndustryTile";
import { industries, SPEED, COLS } from "data/industries"; // 데이터 분리

export default function HomePage() {
  const Columns = COLS.lg;

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-30 h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto relative z-10 flex items-end px-4 h-full text-left">
          <FlyInText direction="left" className="mb-8">
            <div className="text-white">
              <h1 className="text-7xl md:text-8xl font-bold mb-20">
                "Adding Values to your Cargo!"
              </h1>
              <FlyInText
                direction="bottom"
                className="text-1xl md:text-2xl mb-8 text-gray-300"
              >
                James Worldwide moves your cargo in the safest and fastest way
                possible, <br />
                keeping you informed every step of the way and providing
                customized & innovative solutions, <br />
                thereby adding great values to your cargo
              </FlyInText>
              <LinkButton href="/contact">Get a Quote</LinkButton>
            </div>
          </FlyInText>
        </div>
      </section>

      {/* Services */}
      <ServiceGrid />

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            About James Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With decades of experience, James Worldwide connects continents
            through ocean, air, and inland logistics — making shipping simple,
            fast, and secure.
          </p>
        </div>
      </section>
      {/* Infinite vertical columns */}
      <section className="bg-white overflow-hidden max-h-[calc(100vh-200px)]">
        <InfiniteVerticalCarousel
          items={industries} // 배열 (ratio 포함)
          columns={Columns}
          baseDuration={SPEED}
          renderItem={(item, i) => (
            <IndustryTile key={item.title + i} {...item} index={i} />
          )}
        />
      </section>
      {/* Global Network */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Global Network. Local Expertise.
          </h2>
          <p className="text-gray-600">
            From Asia to the Americas, our experts and partners operate in over
            50 countries, giving your business global reach with local
            knowledge.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Need help with international logistics?
          </h2>
          <p className="mb-6">
            Let’s create efficient, end-to-end solutions for your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-800 px-6 py-3 rounded font-semibold hover:bg-gray-100"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}

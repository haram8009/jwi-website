"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import VMVSection from "@/components/about/VMVSection";
import TeamsCards from "@/components/careers/TeamsCards";
import GlobalBranchesMap from "@/components/about/GlobalBranchesMap";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden flex flex-col md:flex-row h-auto md:h-[100vh] pt-40">
        {/* 텍스트 영역 */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:max-w-[50%] px-6 py-12 md:pl-16 md:pr-10 md:py-16 bg-white flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            JAMES
            <br />
            WORLDWIDE
          </h1>
          <p className="text-base leading-relaxed max-w-xl">
            James Worldwide is a global leader in logistics, specializing in
            NVOCC, freight forwarding, and supply chain innovation since 1999.
            Guided by our slogan, “Adding Value to Your Cargo,” we deliver
            highly competitive rates, exceptional service, and creative
            solutions that surpass industry standards. Leveraging an expansive
            digital network across Latin America, Asia, and the United States,
            we offer the fastest, safest, and most cost-effective shipping
            routes. Ranked among the top 5 forwarders between Latin America and
            the US, we continue to drive rapid growth in the Asian
            market—expanding our influence and delivering optimized, customized
            logistics solutions for businesses worldwide.
          </p>
        </motion.div>

        {/* 이미지 영역 */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 h-[300px] md:h-full overflow-hidden"
        >
          <div className="w-full h-full relative clip-right-diagonal">
            <Image
              src="/assets/about/hero-ship.jpeg"
              alt="Ship"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* clip-path */}
        <style jsx>{`
          @media (min-width: 768px) {
            .clip-right-diagonal {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
            }
          }
        `}</style>
      </section>

      {/* 2. Vision / Mission / Value */}
      <VMVSection />

      {/* 3. Branches */}
      <GlobalBranchesMap />

      {/* 4. Teams */}
      <section className="py-16 bg-gradient-to-tr from-white via-blue-50 to-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12">
            Our Teams
          </h2>
          {/* Temporary Use of Teams Cards */}
          <TeamsCards />
        </div>
      </section>
    </main>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
            James Worldwide is a trusted leader in global logistics,
            specializing in NVOCC, freight forwarding, and supply chain
            innovation. Our mission is to provide optimized, customized
            logistics services with precision and efficiency across the globe.
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
      <section className="relative flex flex-col md:grid md:grid-cols-2">
        {/* 이미지 영역 */}
        <div className="relative h-[300px] md:h-auto">
          <Image
            src="/assets/about/truck-road.jpg"
            alt="Truck on highway"
            fill
            className="object-cover"
          />
          {/* 텍스트 오버레이 */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:pl-10 text-white text-3xl md:text-5xl font-extrabold leading-tight">
            <span>VISION</span>
            <span>MISSION</span>
            <span>VALUE</span>
          </div>
        </div>

        {/* 텍스트 설명 */}
        <div className="bg-white px-6 py-12 space-y-8 text-sm">
          <div>
            <h2 className="font-bold text-lg md:text-xl text-primary mb-2">
              VISION
            </h2>
            <p>
              To become a leading global logistics provider known for
              reliability, customization, and care.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl text-primary mb-2">
              MISSION
            </h2>
            <p>
              To provide exceptional logistics solutions by embracing
              technology, professionalism, and partnership.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg md:text-xl text-primary mb-2">
              VALUE
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Integrity and transparency</li>
              <li>Reliable, detail-driven services</li>
              <li>Client-centered approach</li>
              <li>Continuous innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Branches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Global Branches
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 aspect-[4/3] relative">
              <Image
                src="/assets/about/branches-map.jpg"
                alt="Branches map"
                fill
                className="object-cover rounded-xl shadow"
              />
            </div>
            <div className="w-full md:w-1/2 text-sm space-y-4">
              <p>
                <strong>HQ – Fullerton, CA:</strong> Strategic base for global
                coordination.
              </p>
              <p>
                <strong>Atlanta, GA:</strong> Specializing in EV and battery
                logistics.
              </p>
              <p>
                <strong>Guatemala:</strong> Hub for Latin America operations.
              </p>
              <p>
                <strong>Vietnam:</strong> Gateway for Asian shipments.
              </p>
              <p>
                <strong>Haiti:</strong> Garment export and customs support
                center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teams */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Our Teams
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-sm">
            <div>
              <h3 className="font-bold text-primary mb-2">Pricing & Sales</h3>
              <p>
                Optimizing rates, managing relationships, and driving growth
                through strategy and negotiation.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">3PL & Warehousing</h3>
              <p>
                Handling end-to-end fulfillment and logistics with visibility
                and efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-2">Operations</h3>
              <p>
                Ensuring seamless transport with region-specific compliance and
                logistical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function VMVSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // 각 텍스트에 맞춘 Y/Opacity 변환
  const visionY = useTransform(scrollYProgress, [0.00, 0.15], [0, 80]);
  const visionOpacity = useTransform(scrollYProgress, [0.00, 0.15, 0.25], [1, 1, 0]);
  const missionY = useTransform(scrollYProgress, [0.17, 0.33], [80, 0]);
  const missionOpacity = useTransform(scrollYProgress, [0.17, 0.33, 0.5], [0, 1, 0]);
  const valueY = useTransform(scrollYProgress, [0.35, 0.5], [80, 0]);
  const valueOpacity = useTransform(scrollYProgress, [0.35, 0.5, 1], [0, 1, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[300vh] bg-white"
    >
      {/* 배경 이미지 + 오버레이 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/about/vmv.png"
          fill
          alt="Background"
          className="object-cover object-center"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 고정 컨테이너 */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center md:justify-around z-10">
        {/* 왼쪽: 큰 텍스트 */}
        <div className="flex flex-row md:flex-col gap-6 md:gap-10 md:pl-20 md:pr-8 w-full md:w-auto justify-center md:justify-start">
          <motion.h1
            style={{ y: visionY, opacity: visionOpacity }}
            className="text-4xl md:text-6xl font-black text-white drop-shadow-lg"
          >
            VISION
          </motion.h1>
          <motion.h1
            style={{ y: missionY, opacity: missionOpacity }}
            className="text-4xl md:text-6xl font-black text-white drop-shadow-lg"
          >
            MISSION
          </motion.h1>
          <motion.h1
            style={{ y: valueY, opacity: valueOpacity }}
            className="text-4xl md:text-6xl font-black text-white drop-shadow-lg"
          >
            VALUE
          </motion.h1>
        </div>

        {/* 오른쪽: 설명 */}
        <div className="w-full md:w-[580px] lg:w-[650px] px-6 md:px-0 max-w-none md:max-w-2xl relative flex-shrink-0">
          <motion.div
            style={{ opacity: visionOpacity, y: visionY }}
            className="absolute md:static"
          >
            <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow mb-2">VISION</h2>
            <p className="text-base md:text-xl text-white/90 drop-shadow leading-relaxed">
              To become a leading global logistics provider known for reliability, customization, and care.
            </p>
          </motion.div>
          <motion.div
            style={{ opacity: missionOpacity, y: missionY }}
            className="absolute md:static"
          >
            <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow mb-2">MISSION</h2>
            <p className="text-base md:text-xl text-white/90 drop-shadow leading-relaxed">
              To provide exceptional logistics solutions by embracing technology, professionalism, and partnership.
            </p>
          </motion.div>
          <motion.div
            style={{ opacity: valueOpacity, y: valueY }}
            className="absolute md:static"
          >
            <h2 className="text-lg md:text-2xl font-bold text-white drop-shadow mb-2">VALUE</h2>
            <ul className="list-disc ml-5 text-base md:text-xl text-white/90 drop-shadow leading-relaxed space-y-1">
              <li>Integrity and transparency</li>
              <li>Reliable, detail-driven services</li>
              <li>Client-centered approach</li>
              <li>Continuous innovation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

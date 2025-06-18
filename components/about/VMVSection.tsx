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
        {/* 배경이미지 */}
        <Image
          src="/assets/about/vmv.png" 
          fill
          alt="Background"
          className="object-cover object-center"
          quality={90}
          priority
        />
        {/* 오버레이(어둡게) - 필요시만 */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 고정(fixed) 컨테이너 */}
      <div className="sticky top-0 h-screen flex items-center justify-around z-10">
        {/* 왼쪽 큰 텍스트 */}
        <div className="flex flex-col gap-10 pl-20">
          <motion.h1
            style={{ y: visionY, opacity: visionOpacity }}
            className="text-6xl font-black text-white drop-shadow-lg"
          >
            VISION
          </motion.h1>
          <motion.h1
            style={{ y: missionY, opacity: missionOpacity }}
            className="text-6xl font-black text-white drop-shadow-lg"
          >
            MISSION
          </motion.h1>
          <motion.h1
            style={{ y: valueY, opacity: valueOpacity }}
            className="text-6xl font-black text-white drop-shadow-lg"
          >
            VALUE
          </motion.h1>
        </div>
        {/* 오른쪽 설명 */}
        <div className="pr-32 max-w-2xl relative">
          <motion.div
            style={{ opacity: visionOpacity, y: visionY }}
            className="absolute"
          >
            <h2 className="text-xl font-bold text-white drop-shadow">VISION</h2>
            <p className="text-white drop-shadow">
              To become a leading global logistics provider known for reliability, customization, and care.
            </p>
          </motion.div>
          <motion.div
            style={{ opacity: missionOpacity, y: missionY }}
            className="absolute"
          >
            <h2 className="text-xl font-bold text-white drop-shadow">MISSION</h2>
            <p className="text-white drop-shadow">
              To provide exceptional logistics solutions by embracing technology, professionalism, and partnership.
            </p>
          </motion.div>
          <motion.div
            style={{ opacity: valueOpacity, y: valueY }}
            className="absolute"
          >
            <h2 className="text-xl font-bold text-white drop-shadow">VALUE</h2>
            <ul className="list-disc ml-5 text-white drop-shadow">
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

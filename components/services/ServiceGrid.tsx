"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Ocean Freight",
    desc: "Reliable sea cargo services with global coverage.",
    image: "/assets/services/ocean.jpg",
    href: "/services",
  },
  {
    title: "Air Freight",
    desc: "Fast & secure air transport tailored to your needs.",
    image: "/assets/services/air.jpg",
    href: "/services",
  },
  {
    title: "Trucking",
    desc: "Flexible land transport across North America.",
    image: "/assets/services/truck.jpg",
    href: "/services",
  },
  {
    title: "Warehouse & 3PL",
    desc: "End-to-end warehousing and fulfillment.",
    image: "/assets/services/warehouse.jpg",
    href: "/services",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, image, href }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={href}
                className="group transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition duration-200">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

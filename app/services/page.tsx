'use client'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Ocean Freight',
    desc: 'Global shipping via FCL/LCL containers.',
    image: '/assets/services/ocean.jpg',
  },
  {
    title: 'Air Freight',
    desc: 'Fast and reliable international air cargo.',
    image: '/assets/services/air.jpg',
  },
  {
    title: 'Trucking',
    desc: 'Flexible inland transportation nationwide.',
    image: '/assets/services/truck.jpg',
  },
  {
    title: 'Rail & Intermodal',
    desc: 'Cost-effective rail freight across regions.',
    image: '/assets/services/train.jpg',
  },
  {
    title: 'Warehousing & 3PL',
    desc: 'Inventory management and fulfillment.',
    image: '/assets/services/warehouse.jpg',
  },
  {
    title: 'Customs Brokerage',
    desc: 'Clearance services for seamless trade.',
    image: '/assets/services/customs.jpg',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-blue-50 py-20 text-center pt-40">
        <div className="max-w-4xl mx-auto px-4 pt-10">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-gray-700 text-lg">
            Comprehensive logistics solutions from ocean, air, land, to customs and warehousing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group transform transition-transform duration-300 hover:scale-[1.03] bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 group-hover:bg-black/40 transition duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary group-hover:text-orangeRed transition">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}

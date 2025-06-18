import TeamsCards from "@/components/careers/TeamsCards";

export default function PositionsPage() {
  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-tr from-blue-50 via-white to-slate-100 pt-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-10">
          <span className="text-blue-700">Open Positions</span> at JW Family
        </h1>
        <p className="text-center text-slate-600 mb-14 max-w-2xl mx-auto">
          Join our global team! Find the role that fits your passion and
          experience.
        </p>

        <TeamsCards />
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Join Our Team</h1>
          <p className="text-gray-700 text-lg">Build a career at James Worldwide – where logistics meets innovation.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {[
            { title: "Logistics Coordinator", location: "Seoul, Korea", type: "Full‑Time" },
            { title: "Customs Brokerage Specialist", location: "Los Angeles, USA", type: "Full‑Time" },
            { title: "Sales Executive (Freight)", location: "Singapore", type: "Full‑Time" }
          ].map((job, i) => (
            <div key={i} className="border p-6 rounded shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{job.location} • {job.type}</p>
              <p className="text-gray-700 mb-4">Responsible for managing logistics operations and client relations.</p>
              <a href="mailto:hr@jamesworldwide.com" className="text-blue-700 font-medium hover:underline">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-medium mb-2">Don't see your fit yet?</h2>
          <p className="text-gray-700">Send your resume to <a href="mailto:hr@jamesworldwide.com" className="text-blue-700 hover:underline">hr@jamesworldwide.com</a></p>
        </div>
      </section>
    </>
  );
}

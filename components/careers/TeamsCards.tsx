import { Globe, DollarSign, Warehouse } from "lucide-react";

const positions = [
  {
    name: "Pricing & Sales Team",
    gradient:
      "bg-gradient-to-br from-blue-500 via-sky-300 via-cyan-200 to-white",
    icon: <DollarSign size={28} className="text-white" />,
    desc: (
      <>
        Responsible for price quotes & routes, negotiating top carrier rates,
        and integrating sales for efficient lead handling.
      </>
    ),
  },
  {
    name: "Latin America & Haiti Team",
    gradient:
      "bg-gradient-to-br from-slate-900 via-blue-600 via-blue-300 to-white",
    icon: <Globe size={28} className="text-white" />,
    desc: (
      <>
        Specializes in Latin America & US shipments. Haiti experts handle unique
        procedures with regional know-how.
      </>
    ),
  },
  {
    name: "Asia & Africa Team",
    gradient:
      "bg-gradient-to-br from-blue-400 via-indigo-300 via-purple-200 to-slate-100",
    icon: <Globe size={28} className="text-white" />,
    desc: (
      <>
        Rapidly growing Asia & Africa division, 24/7 coordination, driving
        global volume growth.
      </>
    ),
  },
  {
    name: "3PL Team",
    gradient:
      "bg-gradient-to-br from-blue-800 via-cyan-500 via-blue-400 to-sky-300",
    icon: <Warehouse size={28} className="text-white" />,
    desc: (
      <>
        Handles all 3PL warehousing services including storage, labeling,
        inventory, and palletizing for customer satisfaction.
      </>
    ),
  },
];

export default function TeamsCards() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {positions.map((team) => (
        <div
          key={team.name}
          className={`
    relative rounded-2xl shadow-xl border border-white/20
    p-8 flex flex-col gap-4
    ${team.gradient}
    bg-clip-padding bg-opacity-90 backdrop-blur-lg
    transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-300/30`}
          style={{
            border: "1.5px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
          }}
        >
          {/* 오버레이 light glow */}
          <div className="absolute left-1/2 top-1/2 w-36 h-24 bg-white/40 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

          <div className="relative z-10 flex items-center gap-4 mb-2">
            <div className="rounded-full bg-white/30 w-12 h-12 flex items-center justify-center shadow-md">
              {team.icon}
            </div>
            <h2 className="text-xl font-extrabold text-white drop-shadow-lg">
              {team.name}
            </h2>
          </div>
          <div className="relative z-10 text-white/90 text-base leading-relaxed drop-shadow-md">
            {team.desc}
          </div>
          <a
            href="mailto:hr@jamesworldwide.com"
            className="mt-4 inline-block bg-white/80 text-blue-900 font-bold rounded-full px-6 py-2 shadow hover:bg-blue-600 hover:text-white transition-colors"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}

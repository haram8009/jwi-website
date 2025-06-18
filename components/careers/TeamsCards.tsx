import { Globe, DollarSign, Warehouse } from "lucide-react";

const positions = [
  {
    name: "Pricing & Sales Team",
    icon: <DollarSign size={28} className="text-blue-700" />,
    desc: (
      <>
        Responsible for price quotes & routes, negotiating top carrier rates,
        and integrating sales for efficient lead handling.
      </>
    ),
  },
  {
    name: "Latin America & Haiti Team",
    icon: <Globe size={28} className="text-blue-700" />,
    desc: (
      <>
        Specializes in Latin America & US shipments. Haiti experts handle unique
        procedures with regional know-how.
      </>
    ),
  },
  {
    name: "Asia & Africa Team",
    icon: <Globe size={28} className="text-blue-700" />,
    desc: (
      <>
        Rapidly growing Asia & Africa division, 24/7 coordination, driving
        global volume growth.
      </>
    ),
  },
  {
    name: "3PL Team",
    icon: <Warehouse size={28} className="text-blue-700" />,
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
            relative rounded-xl bg-white border border-slate-200
            shadow-sm hover:shadow-md transition-shadow
            p-7 flex flex-col gap-5
          `}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-slate-100 w-11 h-11 flex items-center justify-center">
              {team.icon}
            </div>
            <h2 className="text-lg font-bold text-slate-900">{team.name}</h2>
          </div>
          <div className="text-slate-600 text-base leading-relaxed">
            {team.desc}
          </div>
          <a
            href="mailto:hr@jamesworldwide.com"
            className="mt-4 self-end inline-block border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold rounded-lg px-5 py-2 transition-colors"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}

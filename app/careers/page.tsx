import Link from "next/link";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Users,
  Globe,
  Briefcase,
  MapPin,
  Plane,
} from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/company/james-worldwide-inc",
    label: "LinkedIn",
    bg: "bg-[#0077B5]/90", // LinkedIn color
  },
  {
    icon: <Facebook size={20} />,
    url: "https://www.facebook.com/jamesworldwideinc/",
    label: "Facebook",
    bg: "bg-[#1877F2]/90",
  },
  // {
  //   icon: <Instagram size={20} />,
  //   url: "https://instagram.com/jamesworldwide",
  //   label: "Instagram",
  //   bg: "bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600/90",
  // },
  {
    icon: <Youtube size={20} />,
    url: "https://www.youtube.com/@jamesworldwidemarketingtea3558",
    label: "YouTube",
    bg: "bg-[#FF0000]/90",
  },
  {
    icon: <Mail size={20} />,
    url: "mailto:pt@jamesworldwide.com",
    label: "Email",
    bg: "bg-gray-400/80",
  },
];

export default function CareersPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-tl from-white via-blue-50 to-white flex flex-col items-center py-16 pt-28">
      {/* 헤더 이미지 및 타이틀 */}
      <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden mb-10">
        <img
          src="/assets/career/banner.jpg"
          alt="JW team"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-tr via-blue-800/70 from-blue-500/30 to-transparent z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">
            BECOME PART OF <span className="text-blue-300">JW FAMILY</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold tracking-tight mb-8">
            JOIN OUR TEAM WHERE YOU CAN GROW WITH PERSONAL ATTENTION AND ACHIEVE
            YOUR CAREER GOALS.
          </h2>
          <a
            href="#apply"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition"
          >
            Explore Positions
          </a>
        </div>
      </div>

      {/* 소개 문단 */}
      <p className="max-w-2xl text-center text-gray-600 mb-14">
        At James Worldwide, we recognize that logistics is a people business at
        its core. Without our team of dedicated employees and the excellent
        company culture we foster, it would be impossible to offer what we
        provide for our customers. To continue and improve on this, we are
        always on the lookout to hire the top talent with passion and
        innovations in mind.
      </p>

      {/* 질문/지원 분야 */}
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <Briefcase className="text-blue-700" size={28} />

          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            WHAT DO YOU THINK YOU ARE GOOD AT?
          </h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li>• Are you good at sales? Any experience?</li>
            <li>• Are you fluent in any other languages besides English?</li>
            <li>
              • Do you enjoy traveling a lot? How many countries/cities have you
              been to?
            </li>
            <li>• Are you good at organization using computer?</li>
          </ul>
        </div>
        <div>
          <Users className="text-blue-700" size={28} />
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            WHERE DO YOU SEE YOURSELF AT JAMES WORLDWIDE?
          </h3>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-500" /> Pricing and Sales
            </li>
            <li className="flex items-center gap-2">
              <Globe size={18} className="text-blue-500" /> Latin America and
              Haiti Team
            </li>
            <li className="flex items-center gap-2">
              <Globe size={18} className="text-blue-500" /> Asia and Africa Team
            </li>
            <li className="flex items-center gap-2">
              <Plane size={18} className="text-blue-500" /> 3PL Team
            </li>
            <li className="flex items-center gap-2">
              <Briefcase size={18} className="text-blue-500" /> Accounting
            </li>
          </ul>
          <Link
            id="apply"
            href="/careers/positions"
            className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            LEARN MORE ABOUT POSITIONS
          </Link>
        </div>
      </div>

      {/* 지원 안내 */}
      <div className="w-full max-w-2xl text-center text-gray-700 mb-8">
        <p>
          To apply for a position with James Worldwide, please submit your
          resume along with a cover letter with self-introduction here on our
          website or e-mail them to{" "}
          <a
            href="mailto:hr@jamesworldwide.com"
            className="text-blue-700 font-semibold underline"
          >
            hr@jamesworldwide.com
          </a>
          .
        </p>
      </div>

      {/* 소셜 아이콘 영역 */}
      <div className="flex gap-5 justify-center my-8">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow transition-all duration-150 hover:scale-110 hover:shadow-lg ${item.bg} text-white`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* 하단 안내문구 */}
      <footer className="w-full max-w-3xl text-xs text-gray-400 text-center mt-8">
        James Worldwide is an Equal Opportunity Employer that is committed to
        inclusion and diversity. We take affirmative action to ensure equal
        opportunity for all applicants without regard to race, color, religion,
        sex, sexual orientation, gender identity, national origin, disability,
        veteran status, or other legally protected characteristics.
      </footer>
    </section>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  {
    title: "Our Address",
    icon: <MapPin className="w-5 h-5 text-primary" />,
    content: (
      <>
        1561 E Orangethorpe Ave, Suite 205
        <br />
        Fullerton, CA 92831, USA
      </>
    ),
  },
  {
    title: "Contact Us",
    icon: <Phone className="w-5 h-5 text-primary" />,
    content: (
      <>
        +1 (123) 456‑7890
        <br />
        +1 (987) 654‑3210
      </>
    ),
  },
  {
    title: "Email Us",
    icon: <Mail className="w-5 h-5 text-primary" />,
    content: (
      <>
        <a href="mailto:sales@jamesworldwide.com" className="underline">
          sales@jamesworldwide.com
        </a>
        <br />
        <a href="mailto:hr@jamesworldwide.com" className="underline">
          hr@jamesworldwide.com
        </a>
      </>
    ),
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactItems.map(({ title, icon, content }, i) => (
          <div
            key={i}
            className={`group bg-white hover:bg-blue-600 text-gray-900 hover:text-white hover:shadow-xl rounded-xl shadow-sm transition duration-300 p-6 flex items-start gap-4`}
          >
            <div
              className={`bg-blue-100 p-3 rounded-full flex items-center justify-center text-black`}
            >
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm leading-relaxed group-hover:text-gray-200">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

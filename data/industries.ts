const rawIndustries : Array<Industry> = [
  {
    title: "Agricultural",
    desc: "End-to-end transportation advice, from farm collections…",
    img: "/assets/industries/agri.jpg",
  },
  {
    title: "Automotive",
    desc: "Seamless, damage-free delivery of automobiles to destination…",
    img: "/assets/industries/auto.jpg",
  },
  {
    title: "Auto Parts",
    desc: "Integrated solutions to OEMs, tier suppliers, parts distributors…",
    img: "/assets/industries/parts.jpg",
  },
  {
    title: "Chemicals",
    desc: "Stay up-to-date with ever-changing regulations. We can help…",
    img: "/assets/industries/chem.jpg",
  },
  {
    title: "Electronics",
    desc: "Reduce operating costs & deal with short life-cycles…",
    img: "/assets/industries/electronics.jpg",
  },
  {
    title: "Exhibition",
    desc: "Trade-show shipping needs knowledge of unique cargoes…",
    img: "/assets/industries/exhibition.jpg",
  },
  {
    title: "Food & Beverage",
    desc: "Beer, wine, spirits, mineral water, juices, edible oils…",
    img: "/assets/industries/food.jpg",
  },
  {
    title: "Furniture",
    desc: "Direct delivery from on-shore facility or in-home services…",
    img: "/assets/industries/furniture.jpg",
  },
  {
    title: "Garment",
    desc: "We started off handling fashion brands and major buyers…",
    img: "/assets/industries/garment.jpg",
  },
  {
    title: "ISO Tanks",
    desc: "Bulk liquids incl. chemicals, oils & acids require knowledge…",
    img: "/assets/industries/iso.jpg",
  },
  {
    title: "Oversized",
    desc: "OOG & overweight cargoes, meeting special requirements…",
    img: "/assets/industries/oversized.jpg",
  },
  {
    title: "P.E.T. Resin & Sugar",
    desc: "Bulk transportation services & distribution for PET business…",
    img: "/assets/industries/pet.jpg",
  },
  {
    title: "Pharmaceutical",
    desc: "Regulatory, compliance & temperature-controlled transport…",
    img: "/assets/industries/pharma.jpg",
  },
];

export const COLS= {lg: 4, md: 3, sm: 2}; // 각 화면 크기에 따른 열 수
export const SPEED = 40; // 한 바퀴 도는 시간(sec)

export const ratioCycle = ["square", "portrait", "landscape", "tall", "wide"] as const;
export const industries: Array<Industry> = rawIndustries.map((it, i) => ({
  ...it,
  ratio: ratioCycle[i % ratioCycle.length],
}));
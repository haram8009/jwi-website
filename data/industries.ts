const rawIndustries : Array<Industry> = [
  {
    title: "Agricultural",
    desc: "End-to-end transportation advice, from farm collections…",
    img: "/assets/industries/agri.jpg",
    slug: "agricultural",
    tagline: "End-to-end transportation advice, from farm collections to global distribution.",
  
  },
  {
    title: "Automotive",
    desc: "Seamless, damage-free delivery of automobiles to destination…",
    img: "/assets/industries/auto.jpg",
    slug: "automotive",
    tagline: "Seamless, damage-free delivery of automobiles to destination.",
  },
  {
    title: "Auto Parts",
    desc: "Integrated solutions to OEMs, tier suppliers, parts distributors…",
    img: "/assets/industries/parts.jpg",
    slug: "auto-parts",
    tagline: "Integrated solutions to OEMs, tier suppliers, parts distributors.",
  },
  {
    title: "Chemicals",
    desc: "Stay up-to-date with ever-changing regulations. We can help…",
    img: "/assets/industries/chem.jpg",
    slug: "chemicals",
    tagline: "Stay up-to-date with ever-changing regulations. We can help.",
  },
  {
    title: "Electronics",
    desc: "Reduce operating costs & deal with short life-cycles…",
    img: "/assets/industries/electronics.jpg",
    slug: "electronics",
    tagline: "Reduce operating costs & deal with short life-cycles.",
  },
  {
    title: "Exhibition",
    desc: "Trade-show shipping needs knowledge of unique cargoes…",
    img: "/assets/industries/exhibition.jpg",
    slug: "exhibition",
    tagline: "Trade-show shipping needs knowledge of unique cargoes.",
  },
  {
    title: "Food & Beverage",
    desc: "Beer, wine, spirits, mineral water, juices, edible oils…",
    img: "/assets/industries/food.jpg",
    slug: "food-beverage",
    tagline: "Beer, wine, spirits, mineral water, juices, edible oils.",
  },
  {
    title: "Furniture",
    desc: "Direct delivery from on-shore facility or in-home services…",
    img: "/assets/industries/furniture.jpg",
    slug: "furniture",
    tagline: "Direct delivery from on-shore facility or in-home services.",
  },
  {
    title: "Garment",
    desc: "We started off handling fashion brands and major buyers…",
    img: "/assets/industries/garment.jpg",
    slug: "garment",
    tagline: "We started off handling fashion brands and major buyers.",
  },
  {
    title: "ISO Tanks",
    desc: "Bulk liquids incl. chemicals, oils & acids require knowledge…",
    img: "/assets/industries/iso.jpg",
    slug: "iso-tanks",
    tagline: "Bulk liquids incl. chemicals, oils & acids require knowledge.",
  },
  {
    title: "Oversized",
    desc: "OOG & overweight cargoes, meeting special requirements…",
    img: "/assets/industries/oversized.jpg",
    slug: "oversized",
    tagline: "OOG & overweight cargoes, meeting special requirements.", 
  },
  {
    title: "P.E.T. Resin & Sugar",
    desc: "Bulk transportation services & distribution for PET business…",
    img: "/assets/industries/pet.jpg",
    slug:"pet",
    tagline: "Bulk transportation services & distribution for PET business.",
  },
  {
    title: "Pharmaceutical",
    desc: "Regulatory, compliance & temperature-controlled transport…",
    img: "/assets/industries/pharma.jpg",
    slug: "pharmaceutical",
    tagline: "Regulatory, compliance & temperature-controlled transport.",
  },
];

export const COLS= {lg: 4, md: 3, sm: 2}; // 각 화면 크기에 따른 열 수
export const SPEED = 40; // 한 바퀴 도는 시간(sec)

export const ratioCycle = ["square", "portrait", "landscape", "tall", "wide"] as const;
export const industries: Array<Industry> = rawIndustries.map((it, i) => ({
  ...it,
  ratio: ratioCycle[i % ratioCycle.length],
}));
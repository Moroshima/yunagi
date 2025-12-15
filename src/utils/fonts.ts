import {
  Allison,
  Comforter,
  EB_Garamond,
  Liu_Jian_Mao_Cao,
  Noto_Sans,
  Noto_Sans_SC,
  Noto_Sans_TC,
  Noto_Serif,
  Noto_Serif_SC,
  Noto_Serif_TC,
} from "next/font/google";

const allison = Allison({
  variable: "--font-allison",
  weight: "400",
});
const comforter = Comforter({
  variable: "--font-comforter",
  weight: "400",
});
const eb_garamond = EB_Garamond({
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  weight: "variable",
});
const liu_jian_mao_cao = Liu_Jian_Mao_Cao({
  variable: "--font-liu-jian-mao-cao",
  weight: "400",
});
const noto_sans = Noto_Sans({
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
  weight: "variable",
});
const noto_sans_sc = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
});
const noto_sans_tc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: "variable",
});
const noto_serif = Noto_Serif({
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  weight: "variable",
});
const noto_serif_sc = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: "variable",
});
const noto_serif_tc = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: "variable",
});

export {
  allison,
  comforter,
  eb_garamond,
  liu_jian_mao_cao,
  noto_sans,
  noto_sans_sc,
  noto_sans_tc,
  noto_serif,
  noto_serif_sc,
  noto_serif_tc,
};

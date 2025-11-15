import {
  Allison,
  Comforter,
  Liu_Jian_Mao_Cao,
  Ms_Madi,
  Noto_Sans,
  Noto_Sans_SC,
  Noto_Serif,
  Noto_Serif_SC,
} from "next/font/google";

const allison = Allison({
  subsets: ["latin"],
  variable: "--font-allison",
  weight: "400",
});
const comforter = Comforter({
  subsets: ["latin"],
  variable: "--font-comforter",
  weight: "400",
});
const liu_jian_mao_cao = Liu_Jian_Mao_Cao({
  subsets: ["latin"],
  variable: "--font-liu-jian-mao-cao",
  weight: "400",
});
const ms_madi = Ms_Madi({
  subsets: ["latin"],
  variable: "--font-ms-madi",
  weight: "400",
});
const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});
const noto_sans_sc = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});
const noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});
const noto_serif_sc = Noto_Serif_SC({
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
});

export {
  allison,
  comforter,
  liu_jian_mao_cao,
  ms_madi,
  noto_sans,
  noto_sans_sc,
  noto_serif,
  noto_serif_sc,
};

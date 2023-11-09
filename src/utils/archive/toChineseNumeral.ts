export default function toChineseNumeral(num: number): string {
  const chineseNumeralMap: Record<string, string> = {
    "0": "〇",
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "七",
    "8": "八",
    "9": "九",
  };

  let str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str.charAt(i));
    result += chineseNumeralMap[digit.toString()];
  }

  return result;
}

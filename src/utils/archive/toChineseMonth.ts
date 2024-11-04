export default function toChineseMonth(num: number): string {
  const chineseMonthMap: Record<string, string> = {
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "七",
    "8": "八",
    "9": "九",
    "10": "十",
    "11": "十一",
    "12": "十二",
  };

  const result = chineseMonthMap[num.toString()];

  return result;
}

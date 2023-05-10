export default function comparePostObj(a: any, b: any) {
  const strA = a?.title.toUpperCase(); // 忽略大小写
  const strB = b?.title.toUpperCase(); // 忽略大小写
  if (strA < strB) {
    return -1;
  }
  if (strA > strB) {
    return 1;
  }
  return 0;
}

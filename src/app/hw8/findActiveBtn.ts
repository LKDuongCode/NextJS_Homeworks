export const findActive = (arr: any) => {
  let index = arr.findIndex((item: any) => item.type === "active");
  return index;
};

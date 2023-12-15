import { parseVarriableToLabel } from "./parseVarriableToLabel";

export const parseToLineArray = (array) => {
  const results = [];
  Object.keys(array[0]).forEach((key) => {
    if (
      key !== "time" &&
      key !== "id" &&
      key !== "batchId" &&
      key !== "dailyOrder"
    ) {
      var t = {
        label: parseVarriableToLabel(key),
        value: [],
      };
      array.forEach((element) => {
        t.value.push(element[key]);
      });
      results.push(t);
    }
  });
  return results;
};

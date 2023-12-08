export const parseVarriableToLabel = (variable) => {
  var result = "";
  for (var i = 0; i < variable.length; i++) {
    if (i === 0) {
      result += variable[0].toUpperCase();
    } else {
      if (variable.charAt(i) >= "A" && variable.charAt(i) <= "Z") {
        result += " " + variable.charAt(i);
      } else {
        result += variable.charAt(i);
      }
    }
  }

  return result;
};

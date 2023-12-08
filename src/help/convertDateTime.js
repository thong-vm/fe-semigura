import moment from "moment";
import { DATE_TIME_SHORT_DATE, DATE_TIME_SHORT_TIME } from "../constants/dateTime";

export const convertDateTime = (variable) => {
  const results = moment(variable).format(DATE_TIME_SHORT_DATE);
  return results;
};

export const convertTime = (variable) => {
      const results = moment(variable).format(DATE_TIME_SHORT_TIME);
      return results;
    };
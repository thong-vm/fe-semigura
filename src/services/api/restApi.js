import { retryAxios } from "../../retry/axiosRetry";
import LocalStorage from "../localStorage/localStorage";
export async function requestApi(config) {
  try {
    const { status, statusText, data } = await retryAxios.request(config);
    return status === 200 || status === 201
      ? { result: data }
      : { error: { message: statusText, statusCode: status } };
  } catch (ex) {
    if (ex.response?.status === 401) {
      LocalStorage.clear();
    }
    return { error: { message: ex.message, statusCode: ex.response?.status } };
  }
}

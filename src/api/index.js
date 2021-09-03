import httpRequest from "@/utils/httpRequest.js"

const __httpGet = (url, data, config, responseType) => {
  return httpRequest({url, data, method: "GET", config, responseType})
}
// const __httpPost = (url, data, config, responseType) => {
//   return httpRequest({url, data, method: "POST", config, responseType})
// }

/**
 * 家庭情况
 * @param {} data
 */
 export const getFamilyList = (data, config) => __httpGet("/mock/apis/userHome", data, config)

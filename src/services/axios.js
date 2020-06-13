import axios from "axios"

axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

export const post = (url, data) => {
  console.log(process.env.VUE_APP_API_URL)
  return axios.post(`${process.env.VUE_APP_API_URL}${url}`, data)
}
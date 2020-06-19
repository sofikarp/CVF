import axios from "axios"

axios.defaults.headers.common["Content-Type"] =
  "application/json; charset=utf-8";

// Požedavek post na server - posílání dat na server - používá se v tomto případě Create, požívá se při zakládání
export const post = (url, data) => {
  return axios.post(`${process.env.VUE_APP_API_URL}${url}`, data)
}

// Požadavek get na server - vrací data ze serveru - používá v tomto případě v Appu při načítání dat, načtou se data a předají se do view komponent
export const get = (url) => {
  return axios.get(`${process.env.VUE_APP_API_URL}${url}`)
}

// Požadavek put na server - posílá data na server - používá v tomto případě v Appu při odesílání dat, používá se při updatu
export const put = (url, data) => {
  return axios.put(`${process.env.VUE_APP_API_URL}${url}`, data)
}
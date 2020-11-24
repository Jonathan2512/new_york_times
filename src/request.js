import axios from "axios";
import queryString from "query-string";

const APIURL = "https://api.nytimes.com/svc";
const api_key = "cgctbfjCvB7cCQYOAuLRqGnmG8NRUWwb";

export const search = (data) => {
  Object.keys(data).forEach((key) => {
    data["api-key"] = api_key;
    if (!data[key]) {
      delete data[key];
    }
  });
  return axios.get(
    `${APIURL}/search/v2/articlesearch.json?${queryString.encode(data)}`
  );
};
export const getArticles = (section) => {
 return axios.get(`${APIURL}/topstories/v2/${section}.json?api-key=${api_key}`);
};

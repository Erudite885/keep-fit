export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_JSEARCH_RAPIDAPI_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_JSEARCH_RAPIDAPI_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

console.log(data)
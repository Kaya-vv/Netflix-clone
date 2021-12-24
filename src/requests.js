const API_KEY = "929da5b1f3c0c0f2294bef70167d2035";

const requests = {
  trending: {
    fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    title: "Trending",
  },
  netflix: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    title: "Netflix Originals",
  },
  topRated: {
    fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    title: "Top Rated",
  },
  crime: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    title: "Misdaadfilms",
  },
  action: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    title: "Actie",
  },
  horror: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    title: "Horror",
  },
  romance: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    title: "Romantiek",
  },
  docu: {
    fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    title: "Documentaires",
  },
};

export default requests;

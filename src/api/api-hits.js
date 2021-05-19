import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '21016038-c4a85434ef4684dfcad661ac9';

const fetchHits = async ({ searchQuery = '', currentPage = 1 }) => {
  const { data } = await axios.get(
    `/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits;

  // return axios
  //   .get(
  // `/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  //   )
  //   .then(res => res.data.hits);
};

const fetch = { fetchHits };
export default fetch;

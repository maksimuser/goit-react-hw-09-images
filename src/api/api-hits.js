import axios from 'axios';
import API_KEY from './key';

axios.defaults.baseURL = 'https://pixabay.com';

const fetchHits = async ({ searchQuery = '', currentPage = 1 }) => {
  const { data } = await axios.get(
    `/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data.hits;
};

const fetch = { fetchHits };
export default fetch;

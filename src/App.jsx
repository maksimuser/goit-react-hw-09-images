import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import apiHits from './api';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

export default function App() {
  const [hits, setHits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectImage, setSelectImage] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const options = { searchQuery, currentPage };
      if (!searchQuery) return;
      setIsLoading(true);

      apiHits
        .fetchHits(options)
        .then(hits => {
          setHits(prevHits => [...prevHits, ...hits]);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [currentPage, searchQuery]);

  const nextPage = () => {
    setCurrentPage(state => state + 1);
  };

  const handleChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setHits([]);
    setError(null);
  };

  const toggleModal = (url, alt) => {
    setShowModal(!showModal);
    setSelectImage({ url, alt });
  };

  const shouldRenderLoadButton = hits.length > 0 && !isLoading;

  return (
    <div className="App">
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={selectImage.url} alt={selectImage.alt} />
        </Modal>
      )}

      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <SearchBar onSubmit={handleChangeQuery} />
      <ImageGallery hits={hits} onToggleModal={toggleModal} />

      {isLoading && (
        <div className="Loader">
          <Loader type="ThreeDots" color="blue" height={80} width={80} />
        </div>
      )}
      {shouldRenderLoadButton && <Button onLoadMore={nextPage} />}
    </div>
  );
}

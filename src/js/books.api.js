import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global';

export const getCategoryList = async () => {
  try {
    const response = await axios.get('/books/category-list');
    return response.data;
  } catch (error) {
    console.error('getCategoryList:', error.message);
    throw error;
  }
};

export const getTopBooks = async () => {
  try {
    const response = await axios.get('/books/top-books');
    return response.data;
  } catch (error) {
    console.error('getTopBooks:', error.message);
    throw error;
  }
};

export const getBooksByCategory = async category => {
  try {
    const response = await axios.get('/books/category', {
      params: { category },
    });
    return response.data;
  } catch (error) {
    console.error('getBooksByCategory:', error.message);
    throw error;
  }
};
export const getBooksById = async id => {
  try {
    const response = await axios.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('getBooksById:', error.message);
    throw error;
  }
};

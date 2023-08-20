import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchGallery = async () => {
  const response = await axios.get('/?key=38172117-7e5bd1d3c8612a6c1cc268c37');
  return response.data;
};

// export const deleteQuiz = async quizId => {
//   const response = await axios.delete(`/quizzes/${quizId}`);
//   return response.data;
// };

// export const createQuiz = async quiz => {
//   const response = await axios.post('/quizzes', quiz);
//   return response.data;
// };

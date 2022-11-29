import axios from 'axios';

export const getQuizList = async () => {
  return await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
};

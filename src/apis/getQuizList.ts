import axios from 'axios';

export const getQuizList = async () => {
  const res = await axios.get(
    'https://opentdb.com/api.php?amount=10&type=multiple',
  );
  return res.data;
};

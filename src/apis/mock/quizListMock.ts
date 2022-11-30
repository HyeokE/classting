import { Quiz } from '../../types/quiz';

export const quizListMock: Quiz[] = [
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of the following is an existing family in &quot;The Sims&quot;?',
    correct_answer: 'The Goth Family',
    incorrect_answers: [
      'The Family',
      'The Simoleon Family',
      'The Proud Family',
    ],
  },
  {
    category: 'Entertainment: Music',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which of these songs is NOT included in the Suicide Squad OST?',
    correct_answer: 'Skies on Fire - AC/DC',
    incorrect_answers: [
      'Heathens - Twenty One Pilots',
      'Without Me - Eminem',
      'Fortunate Son - Creedence Clearwater Revival',
    ],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of these is NOT a possible drink to be made in the game &quot;VA-11 HALL-A: Cyberpunk Bartender Action&quot;?',
    correct_answer: 'Sour Appletini',
    incorrect_answers: ['Fringe Weaver', 'Piano Man', 'Bad Touch'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'In the video game &quot;League of Legends&quot; which character is known as &quot;The Sinister Blade&quot;?',
    correct_answer: 'Katarina',
    incorrect_answers: ['Shaco', 'Akali', 'Zed'],
  },
  {
    category: 'Entertainment: Television',
    type: 'multiple',
    difficulty: 'medium',
    question: 'How long was Ken Jennings&#039; win streak on Jeopardy?',
    correct_answer: '74',
    incorrect_answers: ['88', '49', '62'],
  },
  {
    category: 'Entertainment: Television',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'In &quot;Star Trek&quot;, what sauce is commonly used by Klingons on bregit lung?',
    correct_answer: 'Grapok sauce',
    incorrect_answers: [
      'Gazorpazorp pudding',
      'Sweet chili sauce',
      'Grapork sauce',
    ],
  },
  {
    category: 'Celebrities',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'The eccentric natural philosopher Tycho Brahe kept what as a pet?',
    correct_answer: 'Moose',
    incorrect_answers: ['Dog', 'Bear', 'Goat'],
  },
  {
    category: 'Science & Nature',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Coulrophobia is the irrational fear of what?',
    correct_answer: 'Clowns',
    incorrect_answers: ['Cemeteries', 'Needles', 'Tunnels'],
  },
  {
    category: 'Science & Nature',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is the speed of light in a vacuum?',
    correct_answer: '299,792,458 m/s',
    incorrect_answers: ['50,461 m/s', '308,215,043 m/s', '751,665,014,151 m/s'],
  },
  {
    category: 'Entertainment: Music',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'The Proclaimers - I&#039;m Gonna Be (500 Miles) reached what position on the US Hot 100 Charts in 1993?',
    correct_answer: '3rd',
    incorrect_answers: ['8th', '1st', '5th'],
  },
];

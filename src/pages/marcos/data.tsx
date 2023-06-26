interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  hint: string;
}

export const initialQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the correct HTML tag for inserting a line break?',
    options: ['<br>', '<lb>', '<break>', '<line>'],
    answer: '<br>',
    hint: '<br>',
  },
  {
    id: 2,
    question: 'Which attribute is used to define inline styles in HTML?',
    options: ['class', 'id', 'style', 'inline'],
    answer: 'style',
    hint: 'style',
  },
  {
    id: 3,
    question: 'What is the correct HTML tag for the largest heading?',
    options: ['<h1>', '<heading>', '<h6>', ' <big>'],
    answer: '<h1>',
    hint: 'First is the biggest',
  },
  {
    id: 4,
    question:
      'Which element is used to create an ordered numbered list in HTML?',
    options: ['<ol>', '<ul>', ' <li>', '<dl>'],
    answer: '<ol>',
    hint: '<ul> is for unordered list',
  },
  {
    id: 5,
    question: 'What does the "alt" attribute in the <img> tag provide?',
    options: [
      'It specifies the alignment of the image.',
      ' It defines the alternative text for the image.',
      'It sets the border color of the image.',
      'It determines the image source URL.',
    ],
    answer: 'It defines the alternative text for the image.',
    hint: 'To describe the image',
  },
  {
    id: 6,
    question: 'What does the <img> tag do in HTML?',
    options: [
      'It creates a hyperlink.',
      'to add image inside webpage/website. ',
      'It displays a video.',
      'It changes the font style.',
    ],
    answer: 'to add image inside webpage/website. ',
    hint: 'Display an image',
  },
  {
    id: 7,
    question:
      'Which attribute is used to specify the URL of the page that the link goes to?',
    options: ['src', 'href', 'link', 'url'],
    answer: 'href',
    hint: 'href',
  },
  {
    id: 8,
    question:
      'Which attribute is used to specify the URL of an external CSS file?',
    options: ['src', 'href', 'link', 'url'],
    answer: 'link',
    hint: 'link',
  },
  {
    id: 9,
    question:
      'Which attribute is used to make an input field mandatory in HTML?',
    options: ['required', 'mandatory', 'validate', 'constraint'],
    answer: 'required',
    hint: 'required',
  },
  {
    id: 10,
    question: 'Which tag is used to define a header in HTML?',
    options: ['<head>', '<header>', '<h1>', '<title>'],
    answer: '<header>',
    hint: 'The answer is in the question!',
  },
];

// Content pulled from the live math-ninja.org. A few sections there are
// still unedited Divi starter-theme placeholder copy (the Get Involved
// program descriptions, the FAQ questions, the Contact address/tuition
// block, and the single "Hello world!" blog post) — reproduced as-is here
// rather than invented, since that's what's actually live today.
import reikoPhoto from '../assets/team/reiko.jpg';
import brookePhoto from '../assets/team/brooke.jpg';
import steviePhoto from '../assets/team/stevie.jpg';
import camillaPhoto from '../assets/team/camilla.jpg';
import type { FaqItem, TeamMember } from '../types';

export const team: TeamMember[] = [
  {
    name: 'Reiko Yamamoto',
    title: 'Founder/CEO & Board of Director',
    bio: 'Reiko holds a co-founder and CEO position. She has been a lead UX designer with a track record of achievement and currently works at a Fortune 5 healthcare company. She also serves as chief creative officer/co-founder of Bloom Technology and Cyberhedz Media LLC. Reiko earned an MA in Web Design & New Media, and a BFA in Motion Pictures & Television from Academy of Art University.',
    photo: reikoPhoto,
  },
  {
    name: 'Brooke Prairie',
    title: 'VP & Board of Director',
    bio: 'Brooke serves as vice president in charge of the Northern Region. She is passionately interested in fostering the next generation of leaders in America. She holds a BA in English from San Diego State University. She lives in Reno, Nevada, with her husband and two teenagers.',
    photo: brookePhoto,
  },
  {
    name: 'Stevie Dimitre Albert',
    title: 'VP of CX & Board of Director',
    bio: 'Stevie Dimitre Albert works in the fintech industry at BizX, a community of thousands of local business owners who engage and leverage one another within the BizX network, using a tool called the BizX dollar, which enables them to buy from and sell to one another without spending cash. Stevie is also an entrepreneur, running her own small business in the wellness industry, creating new products and techniques for healing, relaxation, and overall well-being.',
    photo: steviePhoto,
  },
  {
    name: 'Camilla B. Thomas',
    title: 'VP of Marketing & Board Member',
    bio: 'Camilla serves as the vice president of Marketing and is a board member. She has a background in digital marketing and has spearheaded marketing initiatives for Microsoft, and currently works for Adobe Systems driving world-wide strategy for search marketing campaigns. She has a fierce passion for education. Camilla received her BS in Business Administration Management with a concentration in Marketing from San Francisco State University.',
    photo: camillaPhoto,
  },
];

export const missionGoals = [
  "Foster a child's confidence in calculation.",
  'Develop a mental calculation skill.',
  'Enhance problem-solving capability.',
  'Improve memory capacity.',
  'Improve focus and mental endurance.',
];

const LOREM_SHORT =
  'Aenean finibus fermentum purus et tristique. Donec at molestie tellus. Donec dignissim eleifend libero sed blandit massa mattis non. In tincidunt, ex vitae laoreet pretium, arcu nisi commodo velit.';

const LOREM_LONG =
  'Aenean finibus fermentum purus et tristique. Donec at molestie tellus. Donec dignissim eleifend libero sed blandit massa mattis non. In tincidunt, ex vitae laoreet pretium, arcu nisi commodo velit. Aenean finibus fermentum purus et tristique. Donec at molestie tellus. Donec dignissim eleifend libero sed blandit massa mattis non.';

export interface Program {
  name: string;
  description: string;
  bullets: string[];
}

export const programCategories = [
  { label: 'Reading/Writing', copy: LOREM_SHORT },
  { label: 'Math/Science', copy: LOREM_SHORT },
];

export const programs: Program[] = [
  {
    name: "Young 3's — Part Time",
    description: LOREM_LONG,
    bullets: [
      'Donec at molestie tellus.',
      'Eleifend libero sed blandit massa.',
      'Mauris congue ligula nec erat.',
      'Praesent vitae pretium nisl.',
      'Duis vulputate rhoncus leo.',
    ],
  },
  {
    name: "Old 3's — Part Time",
    description: LOREM_LONG,
    bullets: [
      'Donec at molestie tellus.',
      'Eleifend libero sed blandit massa.',
      'Mauris congue ligula nec erat.',
      'Praesent vitae pretium nisl.',
      'Duis vulputate rhoncus leo.',
    ],
  },
  {
    name: "4's & 5's — Full Time",
    description: LOREM_LONG,
    bullets: [
      'Donec at molestie tellus.',
      'Eleifend libero sed blandit massa.',
      'Mauris congue ligula nec erat.',
      'Praesent vitae pretium nisl.',
      'Duis vulputate rhoncus leo.',
    ],
  },
  {
    name: 'Pre-K — Part Time',
    description: LOREM_LONG,
    bullets: [
      'Donec at molestie tellus.',
      'Eleifend libero sed blandit massa.',
      'Mauris congue ligula nec erat.',
      'Praesent vitae pretium nisl.',
      'Duis vulputate rhoncus leo.',
    ],
  },
];

export const getInvolvedFaq: FaqItem[] = [
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
  { question: 'Vivamus suscipit tortor eget felis porttitor volutpat?', answer: LOREM_SHORT },
  { question: 'Nulla quis lorem ut libero malesuada feugiat?', answer: LOREM_SHORT },
  { question: 'Faucibus orci luctus et ultrices posuere cubilia?', answer: LOREM_SHORT },
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
  { question: 'Vivamus suscipit tortor eget felis porttitor volutpat?', answer: LOREM_SHORT },
  { question: 'Nulla quis lorem ut libero malesuada feugiat?', answer: LOREM_SHORT },
  { question: 'Faucibus orci luctus et ultrices posuere cubilia?', answer: LOREM_SHORT },
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
  { question: 'Vivamus suscipit tortor eget felis porttitor volutpat?', answer: LOREM_SHORT },
];

export const applyFaq: FaqItem[] = [
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
  { question: 'Vivamus suscipit tortor eget felis porttitor volutpat?', answer: LOREM_SHORT },
  { question: 'Nulla quis lorem ut libero malesuada feugiat?', answer: LOREM_SHORT },
  { question: 'Faucibus orci luctus et ultrices posuere cubilia?', answer: LOREM_SHORT },
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
];

export const testimonials = [
  { quote: LOREM_SHORT, author: 'Math Ninja parent' },
  { quote: LOREM_SHORT, author: 'Math Ninja parent' },
  { quote: LOREM_SHORT, author: 'Math Ninja parent' },
];

export const blogCategories = ['Pre-K', "3's", "4's", "5's"];

export const blogPosts = [
  {
    title: 'Hello world!',
    date: 'May 27, 2019',
    category: 'Uncategorized',
    excerpt: 'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!',
  },
];

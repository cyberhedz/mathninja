// Content pulled from the live math-ninja.org, plus Reiko Yamamoto's
// "Three Interfaces" case study (the Math Ninja branding deck) for the
// Get Involved programs/FAQ and the one real blog post below — both
// grounded in real, documented material (the Soroban benefits, the
// founding story, the real PISA stat) rather than invented from nothing.
// The Contact page's address/phone/email and the "How to Apply" FAQ are
// still the live site's unedited Divi placeholder content — no real data
// for those exists in anything I've been given yet.
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

export interface Program {
  name: string;
  description: string;
  bullets: string[];
}

// The five Soroban benefits as documented in the branding case study —
// used verbatim (lightly reworded for voice) as the bullet list for every
// program tier, since the source material describes them as universal to
// the method rather than age-specific.
const SOROBAN_BENEFITS = [
  "Fosters a child's confidence in calculation.",
  'Develops mental calculation — the ultimate resource.',
  'Leads to greater mental capacity and focus.',
  'Makes it easy to work with large numbers.',
  'Builds a real sense of achievement as proficiency improves.',
];

export const programCategories = [
  {
    label: 'Math/Science',
    copy: "Our core curriculum is built around the Soroban, the Japanese abacus used for centuries to teach calculation. Children learn addition and subtraction — and later multiplication and division — by moving beads, then by picturing those same beads in their heads. That's how real mental math gets built.",
  },
  {
    label: 'Reading/Writing',
    copy: "Math Ninja's curriculum centers on math, not reading instruction. What we've found is that the two aren't unrelated: a child who gains real confidence in calculation tends to carry that confidence into other subjects, reading and writing included.",
  },
];

export const programs: Program[] = [
  {
    name: "Young 3's — Part Time",
    description:
      "Our youngest learners meet the Soroban through hands-on play, not drills. At this age the goal isn't speed — it's comfort: small hands get used to moving beads and counting, so numbers become something physical and fun long before a worksheet ever shows up.",
    bullets: SOROBAN_BENEFITS,
  },
  {
    name: "Old 3's — Part Time",
    description:
      "Building on the Young 3's introduction, children start forming the beginnings of mental math — picturing the Soroban in their heads even when it isn't in front of them. Sessions stay playful and short, but the calculation concepts get a little more deliberate.",
    bullets: SOROBAN_BENEFITS,
  },
  {
    name: "4's & 5's — Full Time",
    description:
      "Our full-day program weaves Soroban practice into the rhythm of the whole school day rather than a single math period. By this stage, many children can visualize the abacus well enough to start doing simple addition and subtraction entirely in their heads — the core skill the method is built around.",
    bullets: SOROBAN_BENEFITS,
  },
  {
    name: 'Pre-K — Part Time',
    description:
      "For families who want the Soroban foundation without a full-time schedule, our Pre-K program covers the same core skills — counting, place value, and visualization — at a part-time pace, building the confidence kids need for kindergarten math.",
    bullets: SOROBAN_BENEFITS,
  },
];

export const getInvolvedFaq: FaqItem[] = [
  {
    question: 'What is the Soroban, and why does Math Ninja teach it?',
    answer:
      "The Soroban is a Japanese abacus — a rectangular wooden frame of beads used for calculation. Rather than teaching math as memorized rules, it lets kids see and feel numbers, then gradually learn to calculate by picturing the beads in their heads — a skill called mental calculation.",
  },
  {
    question: 'What age can my child start?',
    answer:
      "We currently run programs from Young 3's through Pre-K — roughly ages 3 through 5. Each stage builds on the last, from getting comfortable with the beads to doing real mental arithmetic.",
  },
  {
    question: 'Does my child need any math background to start?',
    answer:
      'No. The Soroban method is designed to start from zero — most children begin simply by counting and moving beads, with calculation skills building gradually from there.',
  },
  {
    question: 'What are the actual benefits of the Soroban method?',
    answer:
      "Soroban practice fosters a child's confidence in calculation, develops mental calculation as a lasting skill, builds greater mental capacity and focus, makes large numbers easy to work with, and gives kids a real sense of achievement as their proficiency grows.",
  },
  {
    question: 'Is Math Ninja a full preschool, or just a math class?',
    answer:
      'Math Ninja runs as a full daily program — see our Hours above — with Soroban practice woven into the regular school day rather than taught as one standalone lesson.',
  },
  {
    question: "What's the difference between Part Time and Full Time?",
    answer:
      "Part Time programs (Young 3's, Old 3's, and Pre-K) meet for a portion of the day; the 4's & 5's program runs full time. Reach out through the Admission Inquiry form for the current weekly schedule.",
  },
  {
    question: 'Will my child still learn to read and write at Math Ninja?',
    answer:
      "Our curriculum centers on math, not reading instruction. What our mission is built on is that kids who gain real confidence in calculation tend to carry that confidence into other subjects, reading included.",
  },
  {
    question: "What do you mean by 'gamification' of math?",
    answer:
      "It means mental calculation is taught through play and a real sense of progress, not drills and worksheets — so kids build genuine skill without math feeling like a chore.",
  },
  {
    question: 'Who founded Math Ninja, and why?',
    answer:
      'Math Ninja was founded by Reiko Yamamoto. After years in Silicon Valley’s tech industry, she saw how far American students had fallen behind international peers in math, and wanted to make the Soroban method — a proven tool for building real calculation skill and confidence — accessible to kids, including those from families facing financial hardship.',
  },
  {
    question: 'How do I enroll my child?',
    answer:
      "Fill out the Admission Inquiry form on our Contact page, or use the Schedule a Call button above — we'll follow up to talk through the right program for your child.",
  },
];

export const applyFaq: FaqItem[] = [
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
  { question: 'Vivamus suscipit tortor eget felis porttitor volutpat?', answer: LOREM_SHORT },
  { question: 'Nulla quis lorem ut libero malesuada feugiat?', answer: LOREM_SHORT },
  { question: 'Faucibus orci luctus et ultrices posuere cubilia?', answer: LOREM_SHORT },
  { question: 'Mauris blandit aliquet elit, eget tincidunt nibh?', answer: LOREM_SHORT },
];

// No real parent testimonials exist yet (the live site's were also Lorem
// Ipsum, with no real author attached) — left empty rather than invented;
// GetInvolved.tsx shows an honest "coming soon" message for this state.
export const testimonials: { quote: string; author: string }[] = [];

export const blogCategories = ['Pre-K', "3's", "4's", "5's"];

export const blogPosts = [
  {
    title: 'Why We Teach Math with a 500-Year-Old Abacus',
    date: 'October 5, 2026',
    category: 'Uncategorized',
    excerpt:
      "America ranked 35th out of 72 countries in the 2015 PISA math assessment — a result our founder, Reiko Yamamoto, saw up close coming from Silicon Valley's tech industry, which leans heavily on math talent from overseas. Her answer was the Soroban: a simple wooden abacus that's helped generations of students build real calculation skill, not by memorizing rules, but by learning to picture numbers in their heads. That's the whole idea behind Math Ninja — foster a child's confidence in calculation, develop mental math as a lasting skill, and make the process feel like play instead of pressure. Read more about our approach on the About page.",
  },
];

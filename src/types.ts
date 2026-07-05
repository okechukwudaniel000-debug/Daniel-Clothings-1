export type Theme = 'dark' | 'light';

export interface CollectionItem {
  id: string;
  name: string;
  category: 'Ankara' | 'Agbada' | 'Senator' | 'Corporate' | 'Women' | 'Casual';
  image: string;
  description: string;
  designerNote: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  stars: number;
  content: string;
  date: string;
}

export interface Achievement {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ShowcaseImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

export interface StorySection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentText: string;
}

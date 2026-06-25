import { Card } from './card.model';

export interface Section {
  id: number;
  slug: string;
  title: string;
  label: string;
  bgLight: boolean;
  keywords: string;
  cards: Card[];
  simpleCards: SimpleCardItem[];
}

export interface SimpleCardItem {
  id: number;
  sectionId: number;
  name: string;
  service: string;
  contact: string;
}

export interface CreateSection {
  slug: string;
  title: string;
  label: string;
  bgLight: boolean;
  keywords: string;
}

export interface UpdateSection {
  slug: string;
  title: string;
  label: string;
  bgLight: boolean;
  keywords: string;
}
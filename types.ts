export interface Section {
  title: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  content: {
    intro: string;
    sections: Section[];
    conclusion?: string;
    amazonLink?: string;
  };
  readTime: string;
  date: string;
}

export enum ViewState {
  HOME = 'HOME',
  ARTICLE = 'ARTICLE',
  ABOUT = 'ABOUT'
}
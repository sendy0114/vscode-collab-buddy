// Navbar Feature - Type Definitions

export interface SubLink {
  name: string;
  path: string;
}

export interface MenuItem {
  name: string;
  path?: string;
  hasDropdown?: boolean;
  mega?: boolean;
}

export interface MegaFeatured {
  title: string;
  text: string;
  link: string;
  imageUrl: string;
}

export interface MegaDescription {
  title: string;
  text: string;
  featured: MegaFeatured;
}

export interface MegaLinkItem {
  title: string;
  path: string;
  items?: SubLink[];
}

export interface MegaSolution {
  title: string;
  subtitle?: string;
  path: string;
  buttonText?: string;
  imageUrl?: string;
}

export interface MegaMenuContent {
  description: MegaDescription;
  links: MegaLinkItem[];
  featuredSolutions: MegaSolution[];
}

export type MegaMenuKey = 'Services' | 'Technologies' | 'Industries' | 'Company';

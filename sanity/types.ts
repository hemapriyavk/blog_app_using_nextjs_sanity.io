export interface Author {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  image?: SanityImage;
  bio?: any[];
}

export interface Category {
  _id: string;
  title: string;
  description?: string;
}

export interface InstrumentSection {
  title: string;
  subtitle?: string;
  description?: string;
  image?: SanityImage;
  imageAlt?: string;
}

export interface FeatureCard {
  title: string;
  description?: string;
  image?: SanityImage;
  imageAlt?: string;
}

export interface InstrumentPage {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  introHeading?: string;
  introSubtitle?: string;
  introDescription?: string;
  sections?: InstrumentSection[];
  features?: FeatureCard[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLink?: string;
  ctaLabel?: string;
  disclaimer?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author?: Author;
  mainImage?: SanityImage;
  categories?: Category[];
  publishedAt?: string;
  body?: any[];
  description?: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

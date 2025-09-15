// Tipos específicos para diferentes schemas
export interface BaseSchema {
  "@context": string;
  "@type": string;
}

export interface ArticleSchema extends BaseSchema {
  "@type": "Article" | "NewsArticle" | "BlogPosting";
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string | string[];
  articleSection: string;
  inLanguage: string;
  image: ImageObject;
  author: AuthorObject;
  publisher: PublisherObject;
  video?: VideoObject[];
}

export interface PageSchema extends BaseSchema {
  "@type": "WebPage";
  name: string;
  url: string;
  description: string;
  inLanguage: string;
  mainEntityOfPage: {
    "@type": "WebSite";
    name: string;
    url: string;
  };
  primaryImageOfPage: ImageObject;
  about: {
    "@type": "MedicalTherapy";
    name: string;
    description: string;
  };
  mainEntity: OrganizationObject;
  hasPart: WebApplicationObject;
  video?: VideoObject[];
}

export interface EventSchema extends BaseSchema {
  "@type": "Event";
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    "@type": "VirtualLocation";
    url: string;
  };
  image: string;
  performer: {
    "@type": "Person";
    name: string;
  };
  eventStatus: string;
}

export interface FAQSchema extends BaseSchema {
  "@type": "FAQPage";
  mainEntity: QuestionObject[];
}

export interface HowToSchema extends BaseSchema {
  "@type": "HowTo";
  name: string;
  description: string;
  image?: ImageObject;
  totalTime?: string;
  estimatedCost?: {
    "@type": "MonetaryAmount";
    value: string;
  };
  supply?: SupplyObject[];
  step: HowToStepObject[];
}

// Objetos auxiliares
export interface ImageObject {
  "@type": "ImageObject";
  url: string;
  width?: number;
  height?: number;
}

export interface AuthorObject {
  "@type": "Organization" | "Person";
  name: string;
  url: string;
  sameAs?: string | string[];
}

export interface PublisherObject {
  "@type": "Organization";
  name: string;
  logo: ImageObject;
}

export interface VideoObject {
  "@type": "VideoObject";
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  embedUrl: string;
  uploadDate: string;
}

export interface OrganizationObject {
  "@type": "MedicalOrganization";
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint: any; // Más flexible para permitir diferentes estructuras
  address: AddressObject;
}

export interface ContactPointObject {
  "@type": "ContactPoint";
  telephone: string[];
  contactType: string[];
  areaServed: string;
  availableLanguage: string[];
  email: string;
}

export interface AddressObject {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface WebApplicationObject {
  "@type": "WebApplication";
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  url: string;
  description: string;
  aggregateRating?: {
    "@type": "AggregateRating";
    reviewCount: string;
    ratingValue: string;
    bestRating: string;
    worstRating: string;
  };
}

export interface QuestionObject {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface HowToStepObject {
  "@type": "HowToStep";
  position: number;
  name: string;
  text: string;
  url?: string;
  image?: ImageObject;
}

export interface SupplyObject {
  "@type": "HowToSupply";
  name: string;
}
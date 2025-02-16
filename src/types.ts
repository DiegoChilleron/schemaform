
export interface FormData {
    url: string;
    type: string;
    title: string;
    description: string;
    domain: string;
    datePublished: string;
    dateModified: string[];
    section: string;
    urlImage: string;
    authorType: "Organization" | "Person";
    authorName: string;
    authorURL: string;
    authorRRSS: string[];
    aggregateRating: boolean;
    viewCount: string;
    ratingValue: string;
  }
  
  export interface ImageDimensions {
    width: number;
    height: number;
  }
  

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
    containsYouTubeVideo: boolean;
    youtubeVideos: YouTubeVideo[];
    eventURL?: string;
    eventName?: string;
    eventDescription?: string;
    startDate?: string;
    endDate?: string;
    eventImage?: string;
    performer?: string;
    eventStatus?: string;
    faqItems: FAQItem[];
    faqSubType?: string;
    // HowTo schema fields
    totalTime?: string;
    estimatedCost?: string;
    supply?: string;
    howToSteps: HowToStep[];
  }
  
  export interface ImageDimensions {
    width: number;
    height: number;
  }

  export interface YouTubeVideo {
    url: string;
    name: string;
    description: string;
  }

  export interface FAQItem {
    question: string;
    answer: string;
  }

  export interface HowToStep {
    name: string;
    text: string;
    url: string;
    image: string;
  }
  
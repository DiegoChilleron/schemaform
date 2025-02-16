// src/types.ts
export interface FormData {
    url: string;
    type: string;
    titulo: string;
    descripcion: string;
    datePublished: string;
    dateModified: string[];
    seccion: string;
    urlImagen: string;
    authorType: "Organization" | "Person";
    authorName: string;
    authorURL: string;
    authorRRSS: string[];
    // Campos para valoraciones
    aggregateRating: boolean;
    viewCount: string;
    ratingValue: string;
  }
  
  export interface ImageDimensions {
    width: number;
    height: number;
  }
  
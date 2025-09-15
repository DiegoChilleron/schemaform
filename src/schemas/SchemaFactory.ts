import { FormData, ImageDimensions } from "../types";
import { 
  ArticleSchema, 
  PageSchema, 
  EventSchema, 
  FAQSchema, 
  HowToSchema,
  ImageObject,
  AuthorObject
} from "./types";

export interface SchemaLabels {
  domainPlaceholder: string;
  imageLogoPlaceholder: string;
  telephonePlaceholder: string[];
  contactTypePlaceholder: string[];
  availableLanguage: string[];
  emailPlaceholder: string;
  authorURLPlaceholder: string;
  aboutNamePlaceholder: string;
  aboutDescriptionPlaceholder: string;
  haspartDescriptionPlaceholder: string;
  organizationName: string;
  organizationURL: string;
  organizationAppURL: string;
  organizationSameAs: string[];
  organizationAddress: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export class SchemaFactory {
  private formData: FormData;
  private imageDimensions: ImageDimensions | null;
  private language: string;
  private labels: SchemaLabels;

  constructor(
    formData: FormData,
    imageDimensions: ImageDimensions | null,
    language: string,
    labels: SchemaLabels
  ) {
    this.formData = formData;
    this.imageDimensions = imageDimensions;
    this.language = language;
    this.labels = labels;
  }

  // Helper para extraer ID de video de YouTube
  private extractYouTubeVideoId(url: string): string | null {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) {
        return match[1];
      }
    }
    return null;
  }

  // Generar schema para Article/NewsArticle/BlogPosting
  generateArticleSchema(): { "@context": string; "@graph": any[] } {
    const { formData, imageDimensions, language, labels } = this;
    const { 
      url, type, title, description, datePublished, dateModified, 
      section, urlImage, authorType, authorName, authorURL, authorRRSS,
      containsYouTubeVideo, youtubeVideos 
    } = formData;

    const publishedDate = datePublished ? `${datePublished}:00+01:00` : "";
    const filteredModifiedDates = dateModified
      .filter((d) => d)
      .map((d) => `${d}:00+01:00`);
    const modifiedDates = filteredModifiedDates.length > 0
      ? filteredModifiedDates.length === 1
        ? filteredModifiedDates[0]
        : filteredModifiedDates
      : undefined;

    const imageObject: ImageObject = {
      "@type": "ImageObject",
      url: urlImage || "",
      width: imageDimensions ? imageDimensions.width : 1200,
      height: imageDimensions ? imageDimensions.height : 675,
    };

    const filteredRRSS = authorRRSS.filter((a) => a);
    const sameAs = filteredRRSS.length > 0
      ? filteredRRSS.length === 1
        ? filteredRRSS[0]
        : filteredRRSS
      : undefined;

    const author: AuthorObject = {
      "@type": authorType || "Organization",
      name: authorName || labels.organizationName,
      url: authorURL || labels.authorURLPlaceholder,
      ...(sameAs && { sameAs }),
    };

    const articleSchema: ArticleSchema = {
      "@context": "https://schema.org",
      "@type": type as "Article" | "NewsArticle" | "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url || "",
      },
      headline: title || "",
      description: description || "",
      datePublished: publishedDate,
      ...(modifiedDates && modifiedDates.length > 0 && { dateModified: modifiedDates }),
      articleSection: section || "",
      inLanguage: language,
      image: imageObject,
      author: author,
      publisher: {
        "@type": "Organization",
        name: labels.organizationName,
        logo: {
          "@type": "ImageObject",
          url: labels.imageLogoPlaceholder,
        },
      },
      ...(containsYouTubeVideo && youtubeVideos.length > 0 && {
        video: youtubeVideos
          .filter(video => video.url.trim() !== '')
          .map(video => {
            const videoId = this.extractYouTubeVideoId(video.url);
            return {
              "@type": "VideoObject",
              name: video.name || video.url,
              description: video.description || "",
              thumbnailUrl: videoId ? `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp` : (urlImage || ""),
              contentUrl: video.url,
              embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : video.url,
              uploadDate: publishedDate,
            };
          }),
      }),
    };

    const webPageSchema = this.generateWebPageSchema();
    const webApplicationSchema = this.generateWebApplicationSchema();

    return {
      "@context": "https://schema.org",
      "@graph": [articleSchema, webPageSchema, webApplicationSchema],
    };
  }

  // Generar schema para Página
  generatePageSchema(): PageSchema {
    const { formData, labels, language } = this;
    const { 
      url, title, description, aggregateRating, viewCount, ratingValue,
      containsYouTubeVideo, youtubeVideos 
    } = formData;

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title || "",
      url: url || "",
      description: description || "",
      inLanguage: language,
      mainEntityOfPage: {
        "@type": "WebSite",
        name: labels.organizationName,
        url: labels.domainPlaceholder,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: labels.imageLogoPlaceholder,
      },
      about: {
        "@type": "MedicalTherapy",
        name: labels.aboutNamePlaceholder,
        description: labels.aboutDescriptionPlaceholder,
      },
      mainEntity: {
        "@type": "MedicalOrganization",
        name: labels.organizationName,
        url: labels.domainPlaceholder,
        logo: labels.imageLogoPlaceholder,
        sameAs: labels.organizationSameAs,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: labels.telephonePlaceholder,
          contactType: labels.contactTypePlaceholder,
          areaServed: "Worldwide",
          availableLanguage: labels.availableLanguage,
          email: labels.emailPlaceholder,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: labels.organizationAddress.streetAddress,
          addressLocality: labels.organizationAddress.addressLocality,
          addressRegion: labels.organizationAddress.addressRegion,
          postalCode: labels.organizationAddress.postalCode,
          addressCountry: labels.organizationAddress.addressCountry,
        },
      },
      hasPart: {
        "@type": "WebApplication",
        name: labels.organizationName,
        applicationCategory: "Software as a Service",
        operatingSystem: "All",
        url: labels.organizationAppURL,
        description: labels.haspartDescriptionPlaceholder,
        ...(aggregateRating && viewCount && ratingValue && {
          aggregateRating: {
            "@type": "AggregateRating",
            reviewCount: viewCount,
            ratingValue: ratingValue,
            bestRating: "5",
            worstRating: "1"
          },
        }),
      },
      ...(containsYouTubeVideo && youtubeVideos.length > 0 && {
        video: youtubeVideos
          .filter(video => video.url.trim() !== '')
          .map(video => {
            const videoId = this.extractYouTubeVideoId(video.url);
            return {
              "@type": "VideoObject",
              name: video.name || video.url,
              description: video.description || "",
              thumbnailUrl: videoId ? `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp` : "",
              contentUrl: video.url,
              embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : video.url,
              uploadDate: new Date().toISOString(),
            };
          }),
      }),
    };
  }

  // Generar schema para Event
  generateEventSchema(): { "@context": string; "@graph": EventSchema[] } {
    const { formData } = this;
    const startDate = formData.startDate ? `${formData.startDate}:00+01:00` : "";
    const endDate = formData.endDate ? `${formData.endDate}:00+01:00` : "";

    const eventSchema: EventSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: formData.eventName || "",
      description: formData.eventDescription || "",
      startDate,
      endDate,
      location: {
        "@type": "VirtualLocation",
        url: formData.eventURL || "",
      },
      image: formData.eventImage || "",
      performer: {
        "@type": "Person",
        name: formData.performer || "",
      },
      eventStatus: formData.eventStatus || "",
    };

    return {
      "@context": "https://schema.org",
      "@graph": [eventSchema],
    };
  }

  // Generar schema para FAQ
  generateFAQSchema(): FAQSchema {
    const { formData } = this;
    const items = formData.faqItems || [];
    
    const mainEntityArray = items.length > 0 
      ? items.map(item => ({
          "@type": "Question" as const,
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: item.answer
          }
        }))
      : [{
          "@type": "Question" as const,
          name: "No hay preguntas añadidas",
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: "Añade preguntas usando el formulario"
          }
        }];

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mainEntityArray
    };
  }

  // Generar schema para HowTo
  generateHowToSchema(): HowToSchema {
    const { formData, imageDimensions } = this;
    const { title, description, urlImage, totalTime, estimatedCost, supply, howToSteps } = formData;
    const steps = howToSteps || [];
    
    const stepArray = steps.length > 0 
      ? steps.map((step, index) => ({
          "@type": "HowToStep" as const,
          position: index + 1,
          name: step.name || `Paso ${index + 1}`,
          text: step.text || "",
          ...(step.url && { url: step.url }),
          ...(step.image && { 
            image: {
              "@type": "ImageObject" as const,
              url: step.image
            }
          })
        }))
      : [{
          "@type": "HowToStep" as const,
          position: 1,
          name: "No hay pasos añadidos",
          text: "Añade pasos usando el formulario"
        }];

    const supplyList = supply ? supply.split(',').map(item => item.trim()).filter(item => item) : [];

    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title || "",
      description: description || "",
      ...(urlImage && {
        image: {
          "@type": "ImageObject",
          url: urlImage,
          width: imageDimensions ? imageDimensions.width : 1200,
          height: imageDimensions ? imageDimensions.height : 675,
        }
      }),
      ...(totalTime && { totalTime }),
      ...(estimatedCost && { estimatedCost: { "@type": "MonetaryAmount", value: estimatedCost } }),
      ...(supplyList.length > 0 && { 
        supply: supplyList.map(item => ({
          "@type": "HowToSupply",
          name: item
        }))
      }),
      step: stepArray
    };
  }

  // Helper para generar WebPage schema (usado en articles)
  private generateWebPageSchema() {
    const { formData, labels } = this;
    return {
      "@type": "WebPage",
      url: formData.url || "",
      mainEntityOfPage: {
        "@type": "WebSite",
        name: labels.organizationName,
        url: labels.organizationURL,
      },
      mainEntity: {
        "@type": "MedicalOrganization",
        name: labels.organizationName,
        url: labels.organizationURL,
        logo: labels.imageLogoPlaceholder,
        sameAs: labels.organizationSameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: labels.telephonePlaceholder,
            contactType: labels.contactTypePlaceholder,
            areaServed: "Worldwide",
            availableLanguage: labels.availableLanguage,
            email: labels.emailPlaceholder,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: labels.organizationAddress.streetAddress,
          addressLocality: labels.organizationAddress.addressLocality,
          addressRegion: labels.organizationAddress.addressRegion,
          postalCode: labels.organizationAddress.postalCode,
          addressCountry: labels.organizationAddress.addressCountry,
        },
      },
    };
  }

  // Helper para generar WebApplication schema (usado en articles)
  private generateWebApplicationSchema() {
    const { formData, labels } = this;
    const { aggregateRating, viewCount, ratingValue } = formData;

    return {
      "@type": "WebApplication",
      name: labels.organizationName,
      applicationCategory: "HealthApplication",
      operatingSystem: "All",
      url: labels.organizationAppURL,
      description: labels.haspartDescriptionPlaceholder,
      ...(aggregateRating && viewCount && ratingValue && {
        aggregateRating: {
          "@type": "AggregateRating",
          reviewCount: viewCount,
          ratingValue: ratingValue,
          bestRating: "5",
          worstRating: "1"
        },
      }),
    };
  }

  // Método principal para generar cualquier tipo de schema
  generateSchema(): any {
    const { type } = this.formData;

    switch (type) {
      case "Article":
      case "NewsArticle":
      case "BlogPosting":
        return this.generateArticleSchema();
      case "Pagina":
        return this.generatePageSchema();
      case "Event":
        return this.generateEventSchema();
      case "FAQ":
        return this.generateFAQSchema();
      case "HowTo":
        return this.generateHowToSchema();
      default:
        return "Selecciona un tipo";
    }
  }
}
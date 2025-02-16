import { FormData, ImageDimensions } from "../../types";

export interface SchemaLabels {
  domainPlaceholder: string;
  urlPlaceholder: string;
  imageLogoPlaceholder: string;
  telephonePlaceholder: string[];
  availableLanguage: string[];
  emailPlaceholder: string;
  authorURLPlaceholder: string;
  aboutNamePlaceholder: string;
  aboutDescriptionPlaceholder: string;
  haspartDescriptionPlaceholder: string;
}

export interface BaseSchemaOutputProps {
  formData: FormData;
  imageDimensions: ImageDimensions | null;
  language: string;
  labels: SchemaLabels;
  header: string;
}

export const BaseSchemaOutput: React.FC<BaseSchemaOutputProps> = ({
  formData,
  imageDimensions,
  language,
  labels,
  header,
}) => {
  const {
    url,
    type,
    title,
    description,
    domain,
    datePublished,
    dateModified,
    section,
    urlImage,
    authorType,
    authorName,
    authorURL,
    authorRRSS,
    aggregateRating,
    viewCount,
    ratingValue,
  } = formData;

  let schemaObject: any = {};


  if (type === "Pagina") {
    // Estructura específica para "Pagina"
    schemaObject = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title || "",
      url: url || labels.urlPlaceholder,
      description: description || "",
      inLanguage: "es",
      mainEntityOfPage: {
        "@type": "WebSite",
        name: "NeuronUP",
        url: domain || labels.domainPlaceholder,
      },
      mainEntity: {
        "@type": "MedicalOrganization",
        name: "NeuronUP",
        url: domain || labels.domainPlaceholder,
        logo: labels.imageLogoPlaceholder,
        sameAs: [
          "https://www.facebook.com/NeuronUP",
          "https://x.com/NeuronUP",
          "https://www.linkedin.com/company/neuronup",
          "https://www.youtube.com/user/NeuronUp",
          "https://www.instagram.com/NeuronUP",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: labels.telephonePlaceholder,
          contactType: ["Customer Service", "Sales"],
          areaServed: "Worldwide",
          availableLanguage: labels.availableLanguage,
          email: labels.emailPlaceholder,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "C. Piqueras, 31",
          addressLocality: "Logroño",
          addressRegion: "La Rioja",
          postalCode: "26006",
          addressCountry: "ES",
        },
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
      hasPart: {
        "@type": "WebApplication",
        name: "NeuronUP",
        applicationCategory: "Software as a Service",
        operatingSystem: "All",
        url: "https://app.neuronup.com/",
        description: labels.haspartDescriptionPlaceholder,
        ...(aggregateRating &&
          viewCount &&
          ratingValue && {
          aggregateRating: {
            "@type": "AggregateRating",
            reviewCount: viewCount,
            ratingValue: ratingValue,
            "bestRating": "5",
            "worstRating": "1"
          },
        }),

      },
    };
  } else {
    // Estructura para Article, NewsArticle y BlogPosting
    const articleType = type || "Article";
    const publishedDate = datePublished ? `${datePublished}:00+01:00` : "";
    const modifiedDates =
      dateModified.length > 0
        ? dateModified.filter((d) => d).map((d) => `${d}:00+01:00`)
        : undefined;

    const imageObject = {
      "@type": "ImageObject",
      url: urlImage || "",
      width: imageDimensions ? imageDimensions.width : 1200,
      height: imageDimensions ? imageDimensions.height : 675,
    };

    const filteredRRSS = authorRRSS.filter((a) => a);
    const sameAs =
      filteredRRSS.length > 0
        ? filteredRRSS.length === 1
          ? filteredRRSS[0]
          : filteredRRSS
        : undefined;

    const author = {
      "@type": authorType || "Organization",
      name: authorName || "NeuronUP",
      url: authorURL || labels.authorURLPlaceholder,
      ...(sameAs && { sameAs }),
    };

    const schemaArticle = {
      "@type": articleType,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url || labels.urlPlaceholder,
      },
      headline: title || "",
      description: description || "",
      datePublished: publishedDate,
      ...(modifiedDates &&
        modifiedDates.length > 0 && { dateModified: modifiedDates }),
      articleSection: section || "",
      inLanguage: language,
      image: imageObject,
      author: author,
      publisher: {
        "@type": "Organization",
        name: "NeuronUP",
        logo: {
          "@type": "ImageObject",
          url: labels.imageLogoPlaceholder,
        },
      },
      ...(aggregateRating &&
        viewCount &&
        ratingValue && {
        aggregateRating: {
          "@type": "AggregateRating",
          reviewCount: viewCount,
          ratingValue: ratingValue,
        },
      }),
    };

    const schemaWebPage = {
      "@type": "WebPage",
      url: url || labels.urlPlaceholder,
      mainEntityOfPage: {
        "@type": "WebSite",
        name: "NeuronUP",
        url: "https://neuronup.com",
      },
      mainEntity: {
        "@type": "MedicalOrganization",
        name: "NeuronUP",
        url: "https://neuronup.com",
        logo: labels.imageLogoPlaceholder,
        sameAs: [
          "https://www.facebook.com/NeuronUP",
          "https://x.com/NeuronUP",
          "https://www.linkedin.com/company/neuronup",
          "https://www.youtube.com/user/NeuronUp",
          "https://www.instagram.com/NeuronUP",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: labels.telephonePlaceholder,
            contactType: ["Customer Service", "Sales"],
            areaServed: "Worldwide",
            availableLanguage: labels.availableLanguage,
            email: labels.emailPlaceholder,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "C. Piqueras, 31",
          addressLocality: "Logroño",
          addressRegion: "La Rioja",
          postalCode: "26006",
          addressCountry: "ES",
        },
        ...(aggregateRating &&
          viewCount &&
          ratingValue && {
          aggregateRating: {
            "@type": "AggregateRating",
            reviewCount: viewCount,
            ratingValue: ratingValue,
            "bestRating": "5",
            "worstRating": "1"
          },
        }),
      },
    };

    // Crea el objeto final
    schemaObject = {
      "@context": "https://schema.org",
      "@graph": [schemaArticle, schemaWebPage],
    };
  }

  const schemaStringRaw = `<script type="application/ld+json">\n${JSON.stringify(
    schemaObject,
    null,
    2
  )}\n</script>`;

  // Opcional: formateo sencillo de arrays en el JSON para mejor legibilidad
  const schemaString = schemaStringRaw
    .replace(
      /("telephone": )\[\s+([^\]]+?)\s+\]/g,
      (_match, key, value) => `${key}[ ${value.replace(/\s+/g, " ")} ]`
    )
    .replace(
      /("availableLanguage": )\[\s+([^\]]+?)\s+\]/g,
      (_match, key, value) => `${key}[ ${value.replace(/\s+/g, " ")} ]`
    );

  return (
    <div className="SchemaOutput">
    <div className="grid grid-cols-3 py-4"><h2 className="col-span-2">{header}</h2>
    <button onClick={() => navigator.clipboard.writeText(schemaString)} className="justify-self-end">
      Copiar todo
    </button>
    </div>
    <pre>{schemaString}</pre>
  </div>
  );
};
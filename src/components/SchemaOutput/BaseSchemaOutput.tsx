
import { FormData, ImageDimensions } from "../../types";

export interface SchemaLabels {
  urlPlaceholder: string;
  imageLogoPlaceholder: string;
  telephonePlaceholder: string[];
  availableLanguage: string[];
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
    titulo,
    descripcion,
    datePublished,
    dateModified,
    seccion,
    urlImagen,
    authorType,
    authorName,
    authorURL,
    authorRRSS,
    aggregateRating,
    viewCount,
    ratingValue,
  } = formData;

  // Función para determinar defaults según la URL
  const getDefaultValues = (pageUrl: string) => {
    if (pageUrl.startsWith("https://neuronup.us")) {
      return {
        authorURLDefault: "https://neuronup.us/author/neuronup/",
        emailDefault: "support@neuronup.us",
      };
    } else {
      return {
        authorURLDefault: "https://neuronup.com/author/inigo/",
        emailDefault: "soporte@neuronup.com",
      };
    }
  };

  const { authorURLDefault, emailDefault } = getDefaultValues(url);

  let schemaObject: any = {};

  if (type === "Pagina") {
    // Estructura específica para "Pagina"
    schemaObject = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": titulo || "",
      "url": url || labels.urlPlaceholder,
      "description": descripcion || "",
      "inLanguage": "es",
      "mainEntityOfPage": {
        "@type": "WebSite",
        "name": "NeuronUP",
        "url": "https://neuronup.com"
      },
      "mainEntity": {
        "@type": "MedicalOrganization",
        "name": "NeuronUP",
        "url": "https://neuronup.com",
        "logo": labels.imageLogoPlaceholder,
        "sameAs": [
          "https://www.facebook.com/NeuronUP",
          "https://x.com/NeuronUP",
          "https://www.linkedin.com/company/neuronup",
          "https://www.youtube.com/user/NeuronUp",
          "https://www.instagram.com/NeuronUP"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": labels.telephonePlaceholder,
          "contactType": ["Customer Service", "Sales"],
          "areaServed": "Worldwide",
          "availableLanguage": labels.availableLanguage,
          "email": emailDefault
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C. Piqueras, 31",
          "addressLocality": "Logroño",
          "addressRegion": "La Rioja",
          "postalCode": "26006",
          "addressCountry": "ES"
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://neuronup.com/plantilla-neuronup/wp-content/uploads/2024/10/logo-neuronup-core.svg"
      },
      "about": {
        "@type": "MedicalTherapy",
        "name": "Estimulación Cognitiva",
        "description": "Plataforma de ejercicios y herramientas de estimulación cognitiva y rehabilitación neuropsicológica"
      },
      "hasPart": {
        "@type": "WebApplication",
        "name": "NeuronUP",
        "applicationCategory": "Software as a Service",
        "operatingSystem": "All",
        "url": "https://app.neuronup.com/",
        "description": "Accede a ejercicios de estimulación cognitiva altamente personalizables, herramientas para planificar y medir los resultados de tus intervenciones."
      }
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
      url: urlImagen || "",
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
      url: authorURL || authorURLDefault,
      ...(sameAs && { sameAs }),
    };

    schemaObject = {
      "@type": articleType,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url || labels.urlPlaceholder,
      },
      headline: titulo || "",
      description: descripcion || "",
      datePublished: publishedDate,
      ...(modifiedDates && modifiedDates.length > 0 && { dateModified: modifiedDates }),
      articleSection: seccion || "",
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
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: labels.telephonePlaceholder,
            contactType: ["Customer Service", "Sales"],
            areaServed: "Worldwide",
            availableLanguage: labels.availableLanguage,
            email: emailDefault,
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
      },
      ...(aggregateRating && viewCount && ratingValue && {
        aggregateRating: {
          "@type": "AggregateRating",
          reviewCount: viewCount,
          ratingValue: ratingValue,
        },
      }),
    };
  }

  // Si no es "Pagina", se añade un objeto WebPage extra usando "@graph"
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
          email: emailDefault,
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
    },
  };

  const finalSchemaObject =
    type === "Pagina"
      ? schemaObject
      : {
          "@context": "https://schema.org",
          "@graph": [schemaObject, schemaWebPage],
        };

  const schemaStringRaw = `<script type="application/ld+json">\n${JSON.stringify(
    finalSchemaObject,
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
      <h2>{header}</h2>
      <pre>{schemaString}</pre>
    </div>
  );
};

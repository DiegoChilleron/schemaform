import { FormData, ImageDimensions } from "../../types";
import { getSchemaLabelsFromURL } from "../../config/companies";
import { SchemaFactory } from "../../schemas/SchemaFactory";

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

export interface BaseSchemaOutputProps {
  formData: FormData;
  imageDimensions: ImageDimensions | null;
  language: string;
  labels: SchemaLabels;
  header: string;
  originalUrl?: string;
}

export const BaseSchemaOutput: React.FC<BaseSchemaOutputProps> = ({
  formData,
  imageDimensions,
  language,
  labels,
  header,
  originalUrl,
}) => {
  // Obtener configuración dinámica de la empresa basada en la URL
  const dynamicLabels = originalUrl ? getSchemaLabelsFromURL(originalUrl) : labels;

  // Usar SchemaFactory para generar el schema
  const schemaFactory = new SchemaFactory(formData, imageDimensions, language, dynamicLabels);
  const schemaObject = schemaFactory.generateSchema();

  let schemaStringRaw = "";

  // Si schemaObject es un objeto, lo convertimos a JSON. Si es un string (caso "Selecciona un tipo"), lo mostramos tal cual.
  if (typeof schemaObject === "object") {
    schemaStringRaw = `<script type="application/ld+json">\n${JSON.stringify(
      schemaObject,
      null,
      2
    )}\n</script>`;
  } else {
    schemaStringRaw = schemaObject; // "Selecciona un tipo"
  }

  // Arrays en una línea para mejor legibilidad
  const schemaString = schemaStringRaw
    .replace(
      /("telephone": )\[\s+([^\]]+?)\s+\]/g,
      (_match, key, value) => `${key}[ ${value.replace(/\s+/g, " ")} ]`
    )
    .replace(
      /("contactType": )\[\s+([^\]]+?)\s+\]/g,
      (_match, key, value) => `${key}[ ${value.replace(/\s+/g, " ")} ]`
    )
    .replace(
      /("availableLanguage": )\[\s+([^\]]+?)\s+\]/g,
      (_match, key, value) => `${key}[ ${value.replace(/\s+/g, " ")} ]`
    );

  return (
    <div className="SchemaOutput">
      <div className="flex justify-between items-center py-4">
        <h2 className="flex-1">{header}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => navigator.clipboard.writeText(schemaString)}
          >
            Copiar todo
          </button>
          <button
            onClick={() => window.open('https://search.google.com/test/rich-results?hl=es', '_blank', 'noopener,noreferrer')}
          >
            Validar
          </button>
        </div>
      </div>
      <pre>{schemaString}</pre>
    </div>
  );
};
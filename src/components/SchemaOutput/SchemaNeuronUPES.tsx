
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsES: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/",
  urlPlaceholder: "https://neuronup.com/author/inigo/",
  imageLogoPlaceholder: "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
  emailPlaceholder: "correo",
  authorURLPlaceholder: "https://neuronup.com/author/inigo/",
  aboutNamePlaceholder: "Estimulación cognitiva",
  aboutDescriptionPlaceholder:"Plataforma de ejercicios y herramientas de estimulación cognitiva y rehabilitación neuropsicológica",
  haspartDescriptionPlaceholder: "Accede a ejercicios de estimulación cognitiva altamente personalizables, herramientas para planificar y medir los resultados de tus intervenciones",
};

export const SchemaNeuronUPES: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="es"
    labels={labelsES}
    header="Código Schema Generado (NeuronUP ES)"
  />
);


import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsEN: SchemaLabels = {
  domainPlaceholder: "https://neuronup.us/",
  urlPlaceholder: "https://neuronup.us/author/neuronup/",
  imageLogoPlaceholder: "https://neuronup.us/wp-content/uploads/2023/09/logo-neuronup-core.svg",
  telephonePlaceholder: ["+1-929-579-1273", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
  emailPlaceholder: "correo",
  authorURLPlaceholder: "https://neuronup.us/author/neuronup/",
  aboutNamePlaceholder: "Estimulación cognitiva",
  aboutDescriptionPlaceholder:"Plataforma de ejercicios y herramientas de estimulación cognitiva y rehabilitación neuropsicológica",
  haspartDescriptionPlaceholder: "Acesse exercícios altamente personalizáveis para estimulação cognitiva, além de ferramentas para planejar e medir os resultados de suas intervenções.",
};

export const SchemaNeuronUPEN: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="en"
    labels={labelsEN}
    header="Código Schema Generado (NeuronUP EN)"
  />
);

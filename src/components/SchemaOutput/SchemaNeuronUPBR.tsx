
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsBR: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/br/",
  urlPlaceholder: "https://neuronup.com/br/author/inigo/",
  imageLogoPlaceholder: "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
  emailPlaceholder: "correo",
  authorURLPlaceholder: "https://neuronup.com/br/author/inigo/",
  aboutNamePlaceholder: "Estimulação Cognitiva",
  aboutDescriptionPlaceholder: "Plataforma de exercícios e ferramentas para estimulação cognitiva e reabilitação neuropsicológica",
  haspartDescriptionPlaceholder: "Acesse exercícios altamente personalizáveis para estimulação cognitiva, além de ferramentas para planejar e medir os resultados de suas intervenções.",
};

export const SchemaNeuronUPBR: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="pt-BR"
    labels={labelsBR}
    header="Código Schema Generado (NeuronUP BR)"
  />
);

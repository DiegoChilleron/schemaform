
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsBR: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/br/",
  imageLogoPlaceholder: "https://neuronup.com/br/wp-content/uploads/2024/10/logo-neuronup-core.svg",
  telephonePlaceholder: ["+55-11-97823-3443", "+55-61-3142-6784", "+35-1300-305-019" ],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["pt", "es", "en", "fr"],
  emailPlaceholder: "neuronup.br@neuronup.com",
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

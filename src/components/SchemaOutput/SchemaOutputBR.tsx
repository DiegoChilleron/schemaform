// src/components/SchemaOutput/SchemaOutputES.tsx
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsBR: SchemaLabels = {
  urlPlaceholder: "https://neuronup.com/br/author/inigo/",
  imageLogoPlaceholder:
    "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
};

export const SchemaOutputBR: React.FC<{
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

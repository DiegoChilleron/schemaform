// src/components/SchemaOutput/SchemaOutputES.tsx
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsIT: SchemaLabels = {
  urlPlaceholder: "https://neuronup.com/author/inigo/",
  imageLogoPlaceholder:
    "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
};

export const SchemaOutputIT: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="it"
    labels={labelsIT}
    header="Código Schema Generado (NeuronUP IT)"
  />
);

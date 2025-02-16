
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsAR: SchemaLabels = {
  urlPlaceholder: "https://neuronup.com/ar/author/neuronup/",
  imageLogoPlaceholder:
    "https://neuronup.us/wp-content/uploads/2023/09/logo-neuronup-core.svg",
  telephonePlaceholder: ["+1-929-579-1273", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
};

export const SchemaOutputAR: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="ar"
    labels={labelsAR}
    header="Código Schema Generado (NeuronUP AR)"
  />
);

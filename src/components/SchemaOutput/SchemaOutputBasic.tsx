
import React from "react";
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsBasic: SchemaLabels = {
  domainPlaceholder: "",
  urlPlaceholder: "",
  imageLogoPlaceholder: "",
  telephonePlaceholder: [],
  availableLanguage: [],
  emailPlaceholder: "",
  authorURLPlaceholder: "",
  aboutNamePlaceholder: "",
  aboutDescriptionPlaceholder: "",
  haspartDescriptionPlaceholder: "",
};

export const SchemaOutputBasic: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="es"
    labels={labelsBasic}
    header="Código Schema Generado"
  />
);


import React from "react";
import { BaseSchemaOutput } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";
import { getSchemaLabelsFromURL } from "../../config/companies";

export const SchemaOutputBasic: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => {
  // Usar configuración dinámica basada en la URL del formulario o fallback por defecto
  const dynamicLabels = getSchemaLabelsFromURL(props.formData.url || 'example.com');

  return (
    <BaseSchemaOutput
      {...props}
      language="es"
      labels={dynamicLabels}
      header="Código Schema Generado"
      originalUrl={props.formData.url}
    />
  );
};

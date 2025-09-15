import React from 'react';
import { BaseSchemaOutput } from './BaseSchemaOutput';
import { getSchemaLabelsFromURL } from '../../config/companies';
import { FormData, ImageDimensions } from '../../types';

interface UnifiedSchemaOutputProps {
  formData: FormData;
  imageDimensions: ImageDimensions | null;
  language: string;
}

export const UnifiedSchemaOutput: React.FC<UnifiedSchemaOutputProps> = ({
  formData,
  imageDimensions,
  language
}) => {
  // Detectar empresa basándose en la URL del formulario
  const dynamicLabels = getSchemaLabelsFromURL(formData.url || 'example.com');
  
  // Generar header dinámico basado en la empresa detectada
  const companyName = dynamicLabels.organizationName;
  
  // Si es la configuración por defecto (Ejemplo), no mostrar el nombre de la empresa
  const isDefaultConfig = companyName === 'Ejemplo';
  const header = isDefaultConfig 
    ? "Código Schema Generado"
    : `Código Schema Generado (${companyName} - ${language.toUpperCase()})`;

  return (
    <BaseSchemaOutput
      formData={formData}
      imageDimensions={imageDimensions}
      language={language}
      labels={dynamicLabels}
      header={header}
      originalUrl={formData.url}
    />
  );
};
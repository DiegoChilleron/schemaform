
import React from 'react';
import { UnifiedSchemaOutput } from "../components/SchemaOutput/UnifiedSchemaOutput";
import { FormData, ImageDimensions } from "../types";

// Helper optimizado para determinar el idioma basándose en la URL
const getLanguageFromURL = (url: string): string => {
  const urlLower = url.toLowerCase();
  
  // Mapeo optimizado de dominios/rutas a idiomas
  const languageMap: Record<string, string> = {
    'neuronup.us': 'en',
    '/br/': 'pt',
    '/fr/': 'fr', 
    '/it/': 'it',
    '/de/': 'de',
    '/ru/': 'ru',
    '/ar/': 'ar',
    'neuronup.com': 'es'
  };
  
  // Buscar coincidencia en el mapa
  for (const [pattern, language] of Object.entries(languageMap)) {
    if (urlLower.includes(pattern)) {
      return language;
    }
  }
  
  // Idioma por defecto para URLs no reconocidas
  return "en";
};

// Helper simplificado que siempre retorna UnifiedSchemaOutput
export const getSchemaOutputComponent = (
  url: string
): React.FC<{ formData: FormData; imageDimensions: ImageDimensions | null }> => {
  const language = getLanguageFromURL(url);
  
  // Retornar componente optimizado usando UnifiedSchemaOutput
  return ({ formData, imageDimensions }) => 
    React.createElement(UnifiedSchemaOutput, { 
      formData, 
      imageDimensions, 
      language 
    });
};

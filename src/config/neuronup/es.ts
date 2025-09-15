import { NeuronUPVariantConfig } from './base';

export const NEURONUP_ES_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com'],
  telephone: ["+34-941-123-456", "+44-203-695-8524"],
  email: "soporte@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Estimulación cognitiva",
    description: "Plataforma de ejercicios y herramientas de estimulación cognitiva y rehabilitación neuropsicológica",
    hasPart: "Accede a ejercicios de estimulación cognitiva altamente personalizables, herramientas para planificar y medir los resultados de tus intervenciones"
  },
  logo: {
    year: "2021",
    path: "/wp-content/uploads/2021/07/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["es", "en", "fr", "pt"]
};
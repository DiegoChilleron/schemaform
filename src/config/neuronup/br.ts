import { NeuronUPVariantConfig } from './base';

export const NEURONUP_BR_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com/br'],
  telephone: ["+55-11-97823-3443", "+55-61-3142-6784", "+35-1300-305-019"],
  email: "neuronup.br@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Estimulação Cognitiva",
    description: "Plataforma de exercícios e ferramentas para estimulação cognitiva e reabilitação neuropsicológica",
    hasPart: "Acesse exercícios altamente personalizáveis para estimulação cognitiva, além de ferramentas para planejar e medir os resultados de suas intervenções."
  },
  logo: {
    year: "2024",
    path: "/wp-content/uploads/2024/10/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["pt", "es", "en", "fr"]
};
import { NeuronUPVariantConfig } from './base';

export const NEURONUP_DE_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com/de'],
  telephone: ["+34-649-46-40-94", "+39-351-408-51-10"],
  email: "neuronup.de@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Kognitive Stimulation",
    description: "Plattform für Übungen und Werkzeuge zur kognitiven Stimulation und neuropsychologischen Rehabilitation",
    hasPart: "Greifen Sie auf hochgradig anpassbare Übungen für die kognitive Stimulation zu sowie auf Werkzeuge zur Planung und Messung der Ergebnisse Ihrer Interventionen"
  },
  logo: {
    year: "2023",
    path: "/wp-content/uploads/2023/12/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["de", "pt", "es", "en", "fr"]
};
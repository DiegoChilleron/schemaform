import { NeuronUPVariantConfig } from './base';

export const NEURONUP_IT_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com/it'],
  telephone: ["+39-351-477-94-88"],
  email: "neuronup.it@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Stimolazione cognitiva",
    description: "Piattaforma di esercizi e strumenti per la stimolazione cognitiva e la riabilitazione neuropsicologica",
    hasPart: "Accedi a esercizi altamente personalizzabili per la stimolazione cognitiva, nonché a strumenti per pianificare e misurare i risultati dei tuoi interventi"
  },
  logo: {
    year: "2023",
    path: "/wp-content/uploads/2023/12/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["it", "pt", "es", "en", "fr"]
};
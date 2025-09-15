import { NeuronUPVariantConfig } from './base';

export const NEURONUP_FR_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com/fr'],
  telephone: ["+34-941-123-456", "+33-745-893-378"],
  email: "neuronup.fr@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Stimulation Cognitive",
    description: "Plateforme d'exercices et d'outils pour la stimulation cognitive et la réhabilitation neuropsychologique",
    hasPart: "Accédez à des exercices de stimulation cognitive hautement personnalisables, ainsi qu'à des outils pour planifier et mesurer les résultats de vos interventions"
  },
  logo: {
    year: "2024",
    path: "/wp-content/uploads/2024/10/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["fr", "es", "en", "pt"]
};
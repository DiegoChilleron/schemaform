import { NeuronUPVariantConfig } from './base';

export const NEURONUP_RU_CONFIG: NeuronUPVariantConfig = {
  domains: ['neuronup.com/ru'],
  telephone: ["+34-941-123-456", "+44-203-695-8524"],
  email: "neuronup.ru@neuronup.com",
  address: {
    streetAddress: "C. Piqueras, 31",
    addressLocality: "Logroño",
    addressRegion: "La Rioja",
    postalCode: "26006",
    addressCountry: "ES"
  },
  about: {
    name: "Когнитивная стимуляция",
    description: "Платформа упражнений и инструментов для когнитивной стимуляции и нейропсихологической реабилитаци",
    hasPart: "Получите доступ к высоко персонализируемым упражнениям для когнитивной стимуляции, а также к инструментам для планирования и измерения результатов ваших вмешательств"
  },
  logo: {
    year: "2025",
    path: "/wp-content/uploads/2025/01/logo-neuronup-core.svg"
  },
  author: {
    path: "/author/inigo/"
  },
  languages: ["ru", "es", "pt", "en", "fr"]
};
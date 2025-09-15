// Configuración base compartida para todas las variantes de NeuronUP
export const NEURONUP_BASE_CONFIG = {
  colors: {
    primary: '#00abc7',
    h1: 'white'
  },
  organizationName: "NeuronUP",
  organizationSameAs: [
    "https://www.facebook.com/NeuronUP",
    "https://x.com/NeuronUP",
    "https://www.linkedin.com/company/neuronup",
    "https://www.youtube.com/user/NeuronUp",
    "https://www.instagram.com/NeuronUP"
  ],
  contactTypePlaceholder: ["Customer Service", "Sales"]
};

// Interface para configuraciones específicas de cada variante
export interface NeuronUPVariantConfig {
  domains: string[];
  telephone: string[];
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  about: {
    name: string;
    description: string;
    hasPart: string;
  };
  logo: {
    year: string; // Para determinar el path del logo
    path?: string; // Path personalizado si es necesario
  };
  author: {
    path: string; // Ruta del autor
  };
  languages: string[];
}
import { 
  NEURONUP_BASE_CONFIG, 
  NEURONUP_VARIANTS
} from './neuronup';

export interface CompanyConfig {
  domains: string[];
  name: string;
  colors: {
    primary: string;
    h1: string;
  };
  schema: {
    domainPlaceholder: string;
    imageLogoPlaceholder: string;
    telephonePlaceholder: string[];
    contactTypePlaceholder: string[];
    availableLanguage: string[];
    emailPlaceholder: string;
    authorURLPlaceholder: string;
    aboutNamePlaceholder: string;
    aboutDescriptionPlaceholder: string;
    haspartDescriptionPlaceholder: string;
    organizationName: string;
    organizationURL: string;
    organizationAppURL: string;
    organizationSameAs: string[];
    organizationAddress: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
}

// Helper para crear configuraciones de NeuronUP usando los archivos modulares
const createNeuronUPConfig = (variant: keyof typeof NEURONUP_VARIANTS): CompanyConfig => {
  const config = NEURONUP_VARIANTS[variant];
  
  // Determinar URLs base según la variante
  let baseUrl: string;
  let appUrl: string;

  if (variant === 'US') {
    baseUrl = 'https://neuronup.us';
    appUrl = 'https://app.neuronup.us/';
  } else if (variant === 'ES') {
    baseUrl = 'https://neuronup.com';
    appUrl = 'https://app.neuronup.com/';
  } else {
    // Para variantes de idioma (BR, FR, DE, IT, RU, AR)
    baseUrl = `https://neuronup.com/${variant.toLowerCase()}`;
    appUrl = 'https://app.neuronup.com/';
  }

  return {
    domains: config.domains,
    name: `NeuronUP ${variant}`,
    colors: NEURONUP_BASE_CONFIG.colors,
    schema: {
      domainPlaceholder: `${baseUrl}/`,
      imageLogoPlaceholder: `${baseUrl}${config.logo.path}`,
      telephonePlaceholder: config.telephone,
      contactTypePlaceholder: NEURONUP_BASE_CONFIG.contactTypePlaceholder,
      availableLanguage: config.languages,
      emailPlaceholder: config.email,
      authorURLPlaceholder: `${baseUrl}${config.author.path}`,
      aboutNamePlaceholder: config.about.name,
      aboutDescriptionPlaceholder: config.about.description,
      haspartDescriptionPlaceholder: config.about.hasPart,
      organizationName: NEURONUP_BASE_CONFIG.organizationName,
      organizationURL: baseUrl,
      organizationAppURL: appUrl,
      organizationSameAs: NEURONUP_BASE_CONFIG.organizationSameAs,
      organizationAddress: config.address
    }
  };
};

// Configuraciones de empresas
export const COMPANY_CONFIGS: CompanyConfig[] = [
  // NeuronUP variantes usando la función helper
  createNeuronUPConfig('ES'),    // neuronup.com
  createNeuronUPConfig('US'),    // neuronup.us
  createNeuronUPConfig('BR'),    // neuronup.com/br
  createNeuronUPConfig('FR'),    // neuronup.com/fr
  createNeuronUPConfig('DE'),    // neuronup.com/de
  createNeuronUPConfig('IT'),    // neuronup.com/it
  createNeuronUPConfig('RU'),    // neuronup.com/ru
  createNeuronUPConfig('AR')     // neuronup.com/ar
  // Aquí se pueden añadir fácilmente más empresas...
];

// Configuración por defecto para URLs no reconocidas
export const DEFAULT_COMPANY_CONFIG: CompanyConfig = {
  domains: ['example.com'],
  name: 'Example Company',
  colors: {
    primary: '#F5F3EF',
    h1: '#3C4044'
  },
  schema: {
    domainPlaceholder: "https://example.com/",
    imageLogoPlaceholder: "https://example.com/logo.svg",
    telephonePlaceholder: ["+1-555-123-4567"],
    contactTypePlaceholder: ["Customer Service", "Sales"],
    availableLanguage: ["es"],
    emailPlaceholder: "contact@example.com",
    authorURLPlaceholder: "https://example.com/author/",
    aboutNamePlaceholder: "Your Service",
    aboutDescriptionPlaceholder: "Platform for your amazing services",
    haspartDescriptionPlaceholder: "Access to your platform's features and tools.",
    organizationName: "Ejemplo",
    organizationURL: "https://example.com",
    organizationAppURL: "https://app.example.com/",
    organizationSameAs: [
      "https://www.facebook.com/example",
      "https://x.com/example",
      "https://www.linkedin.com/company/example"
    ],
    organizationAddress: {
      streetAddress: "123 Example Street",
      addressLocality: "Example City",
      addressRegion: "Example State",
      postalCode: "12345",
      addressCountry: "US"
    }
  }
};

// Helper para detectar empresa por URL
export const detectCompanyFromURL = (url: string): CompanyConfig => {
  const urlLower = url.toLowerCase();
  
  const matchingCompany = COMPANY_CONFIGS.find(config =>
    config.domains.some(domain => urlLower.includes(domain))
  );
  
  return matchingCompany || DEFAULT_COMPANY_CONFIG;
};

// Helper para obtener configuración de tema
export const getThemeFromURL = (url: string) => {
  const company = detectCompanyFromURL(url);
  return company.colors;
};

// Helper para obtener labels de schema
export const getSchemaLabelsFromURL = (url: string) => {
  const company = detectCompanyFromURL(url);
  return company.schema;
};
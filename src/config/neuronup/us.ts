import { NeuronUPVariantConfig } from './base';

export const NEURONUP_US_CONFIG: NeuronUPVariantConfig = {
    domains: ['neuronup.us'],
    telephone: ["+1-929-579-1273", "+44-203-695-8524"],
    email: "support@neuronup.us",
    address: {
        streetAddress: "C. Piqueras, 31",
        addressLocality: "Logroño",
        addressRegion: "La Rioja",
        postalCode: "26006",
        addressCountry: "ES"
    },
    about: {
        name: "Cognitive Stimulation",
        description: "Platform for cognitive stimulation exercises and neuropsychological rehabilitation tools",
        hasPart: "Access highly customizable cognitive stimulation exercises, plus tools to plan and measure the results of your interventions."
    },
    logo: {
        year: "2023",
        path: "/wp-content/uploads/2023/09/logo-neuronup-core.svg"
    },
    author: {
        path: "/author/neuronup/"
    },
    languages: ["en", "es", "fr", "pt"]
};
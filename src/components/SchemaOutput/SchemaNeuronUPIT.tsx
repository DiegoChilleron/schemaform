
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsIT: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/it/",
  imageLogoPlaceholder: "https://neuronup.com/it/wp-content/uploads/2023/12/logo-neuronup-core.svg",
  telephonePlaceholder: ["+39-351-477-94-88"],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["it", "pt", "es", "en", "fr"],
  emailPlaceholder: "neuronup.it@neuronup.com",
  authorURLPlaceholder: "https://neuronup.com/it/author/inigo/",
  aboutNamePlaceholder: "Stimolazione cognitiva",
  aboutDescriptionPlaceholder:"Piattaforma di esercizi e strumenti per la stimolazione cognitiva e la riabilitazione neuropsicologica",
  haspartDescriptionPlaceholder: "Accedi a esercizi altamente personalizzabili per la stimolazione cognitiva, nonché a strumenti per pianificare e misurare i risultati dei tuoi interventi",
};

export const SchemaNeuronUPIT: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="it"
    labels={labelsIT}
    header="Código Schema Generado (NeuronUP IT)"
  />
);

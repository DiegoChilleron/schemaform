
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsIT: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/it/",
  urlPlaceholder: "https://neuronup.com/author/inigo/",
  imageLogoPlaceholder: "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
  emailPlaceholder: "correo",
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

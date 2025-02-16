
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsFR: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/fr/",
  urlPlaceholder: "https://neuronup.com/author/inigo/",
  imageLogoPlaceholder: "https://neuronup.com/wp-content/uploads/2021/07/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  availableLanguage: ["es", "en", "fr", "pt"],
  emailPlaceholder: "correo",
  authorURLPlaceholder: "https://neuronup.com/fr/author/inigo/",
  aboutNamePlaceholder: "Stimulation Cognitive",
  aboutDescriptionPlaceholder:"Plateforme d'exercices et d'outils pour la stimulation cognitive et la réhabilitation neuropsychologique",
  haspartDescriptionPlaceholder: "Accédez à des exercices de stimulation cognitive hautement personnalisables, ainsi qu'à des outils pour planifier et mesurer les résultats de vos interventions",
};

export const SchemaNeuronUPFR: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="fr"
    labels={labelsFR}
    header="Código Schema Generado (NeuronUP FR)"
  />
);

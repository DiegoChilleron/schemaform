
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsFR: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/fr/",
  imageLogoPlaceholder: "https://neuronup.com/fr/wp-content/uploads/2024/10/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+33-745-893-378"],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["fr", "es", "en", "pt"],
  emailPlaceholder: "neuronup.fr@neuronup.com",
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

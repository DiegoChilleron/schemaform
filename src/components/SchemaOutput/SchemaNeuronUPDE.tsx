
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsDE: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/de/",
  imageLogoPlaceholder: "https://neuronup.com/de/wp-content/uploads/2023/12/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-649-46-40-94", "+39-351-408-51-10"],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["de", "pt", "es", "en", "fr"],
  emailPlaceholder: "neuronup.de@neuronup.com",
  authorURLPlaceholder: "https://neuronup.com/de/author/inigo/",
  aboutNamePlaceholder: "Kognitive Stimulation",
  aboutDescriptionPlaceholder:"Plattform für Übungen und Werkzeuge zur kognitiven Stimulation und neuropsychologischen Rehabilitation",
  haspartDescriptionPlaceholder: "Greifen Sie auf hochgradig anpassbare Übungen für die kognitive Stimulation zu sowie auf Werkzeuge zur Planung und Messung der Ergebnisse Ihrer Interventionen",
};

export const SchemaNeuronUPDE: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="de"
    labels={labelsDE}
    header="Código Schema Generado (NeuronUP DE)"
  />
);

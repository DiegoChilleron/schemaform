
import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsRU: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/ru/",
  imageLogoPlaceholder: "https://neuronup.com/ru/wp-content/uploads/2025/01/logo-neuronup-core.svg",
  telephonePlaceholder: ["+34-941-123-456", "+44-203-695-8524"],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["ru", "es", "pt", "en", "fr"],
  emailPlaceholder: "neuronup.ru@neuronup.com",
  authorURLPlaceholder: "https://neuronup.com/ru/author/inigo/",
  aboutNamePlaceholder: "Когнитивная стимуляция",
  aboutDescriptionPlaceholder:"Платформа упражнений и инструментов для когнитивной стимуляции и нейропсихологической реабилитаци",
  haspartDescriptionPlaceholder: "Получите доступ к высоко персонализируемым упражнениям для когнитивной стимуляции, а также к инструментам для планирования и измерения результатов ваших вмешательств",
};

export const SchemaNeuronUPRU: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="ru"
    labels={labelsRU}
    header="Código Schema Generado (NeuronUP RU)"
  />
);


import { BaseSchemaOutput, SchemaLabels } from "./BaseSchemaOutput";
import { FormData, ImageDimensions } from "../../types";

const labelsAR: SchemaLabels = {
  domainPlaceholder: "https://neuronup.com/ar/",
  imageLogoPlaceholder: "https://neuronup.com/ar/wp-content/uploads/2024/10/logo-neuronup-core.svg",
  telephonePlaceholder: ["+1-929-579-1273", "+44-203-695-8524"],
  contactTypePlaceholder: ["Customer Service", "Sales"],
  availableLanguage: ["ar", "es", "pt", "en", "fr"],
  emailPlaceholder: "neuronup.ar@neuronup.com",
  authorURLPlaceholder: "https://neuronup.com/ar/author/inigo/",
  aboutNamePlaceholder: "التحفيز الإدراكي",
  aboutDescriptionPlaceholder: "منصة تمارين وأدوات التحفيز الإدراكي وإعادة التأهيل العصبي النفسي",
  haspartDescriptionPlaceholder: "استفد من تمارين قابلة للتخصيص بدرجة عالية للتحفيز الإدراكي، بالإضافة إلى أدوات لتخطيط وقياس نتائج تدخلاتك.",
};

export const SchemaNeuronUPAR: React.FC<{
  formData: FormData;
  imageDimensions: ImageDimensions | null;
}> = (props) => (
  <BaseSchemaOutput
    {...props}
    language="ar"
    labels={labelsAR}
    header="Código Schema Generado (NeuronUP AR)"
  />
);


import { SchemaOutputBasic } from "../components/SchemaOutput/SchemaOutputBasic";
import { SchemaNeuronUPEN } from "../components/SchemaOutput/SchemaNeuronUPEN";
import { SchemaNeuronUPES } from "../components/SchemaOutput/SchemaNeuronUPES";
import { SchemaNeuronUPBR } from "../components/SchemaOutput/SchemaNeuronUPBR";
import { SchemaNeuronUPFR } from "../components/SchemaOutput/SchemaNeuronUPFR";
import { SchemaNeuronUPIT } from "../components/SchemaOutput/SchemaNeuronUPIT";
import { SchemaNeuronUPDE } from "../components/SchemaOutput/SchemaNeuronUPDE";
import { SchemaNeuronUPRU } from "../components/SchemaOutput/SchemaNeuronUPRU";
import { SchemaNeuronUPAR } from "../components/SchemaOutput/SchemaNeuronUPAR";
import { FormData, ImageDimensions } from "../types";

export const getSchemaOutputComponent = (
  url: string
): React.FC<{ formData: FormData; imageDimensions: ImageDimensions | null }> => {
  if (url.startsWith("https://neuronup.us")) return SchemaNeuronUPEN;
  if (url.startsWith("https://neuronup.com/br")) return SchemaNeuronUPBR;
  if (url.startsWith("https://neuronup.com/fr")) return SchemaNeuronUPFR;
  if (url.startsWith("https://neuronup.com/it")) return SchemaNeuronUPIT;
  if (url.startsWith("https://neuronup.com/de")) return SchemaNeuronUPDE;  
  if (url.startsWith("https://neuronup.com/ru")) return SchemaNeuronUPRU;
  if (url.startsWith("https://neuronup.com/ar")) return SchemaNeuronUPAR;
  if (url.startsWith("https://neuronup.com")) return SchemaNeuronUPES;
  return SchemaOutputBasic;
};

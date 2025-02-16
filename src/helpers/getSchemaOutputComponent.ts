// src/helpers/getSchemaOutputComponent.ts
import { SchemaOutputBasic } from "../components/SchemaOutput/SchemaOutputBasic";
import { SchemaOutputEN } from "../components/SchemaOutput/SchemaOutputEN";
import { SchemaOutputES } from "../components/SchemaOutput/SchemaOutputES";
import { SchemaOutputBR } from "../components/SchemaOutput/SchemaOutputBR";
import { SchemaOutputFR } from "../components/SchemaOutput/SchemaOutputFR";
import { SchemaOutputIT } from "../components/SchemaOutput/SchemaOutputIT";
import { SchemaOutputRU } from "../components/SchemaOutput/SchemaOutputRU";
import { SchemaOutputAR } from "../components/SchemaOutput/SchemaOutputAR";
import { FormData, ImageDimensions } from "../types";

export const getSchemaOutputComponent = (
  url: string
): React.FC<{ formData: FormData; imageDimensions: ImageDimensions | null }> => {
  if (url.startsWith("https://neuronup.us")) return SchemaOutputEN;
  if (url.startsWith("https://neuronup.com/br")) return SchemaOutputBR;
  if (url.startsWith("https://neuronup.com/fr")) return SchemaOutputFR;
  if (url.startsWith("https://neuronup.com/it")) return SchemaOutputIT;
  if (url.startsWith("https://neuronup.com/ru")) return SchemaOutputRU;
  if (url.startsWith("https://neuronup.com/ar")) return SchemaOutputAR;
  if (url.startsWith("https://neuronup.com")) return SchemaOutputES;
  return SchemaOutputBasic;
};

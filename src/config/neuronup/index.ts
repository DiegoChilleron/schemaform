// Re-exportar configuración base
export { NEURONUP_BASE_CONFIG, type NeuronUPVariantConfig } from './base';

// Re-exportar todas las configuraciones de variantes
export { NEURONUP_ES_CONFIG } from './es';
export { NEURONUP_US_CONFIG } from './us';
export { NEURONUP_BR_CONFIG } from './br';
export { NEURONUP_FR_CONFIG } from './fr';
export { NEURONUP_DE_CONFIG } from './de';
export { NEURONUP_IT_CONFIG } from './it';
export { NEURONUP_RU_CONFIG } from './ru';
export { NEURONUP_AR_CONFIG } from './ar';

// Importar todas las configuraciones
import { NEURONUP_ES_CONFIG } from './es';
import { NEURONUP_US_CONFIG } from './us';
import { NEURONUP_BR_CONFIG } from './br';
import { NEURONUP_FR_CONFIG } from './fr';
import { NEURONUP_DE_CONFIG } from './de';
import { NEURONUP_IT_CONFIG } from './it';
import { NEURONUP_RU_CONFIG } from './ru';
import { NEURONUP_AR_CONFIG } from './ar';

// Objeto con todas las configuraciones (importación directa)
export const NEURONUP_VARIANTS = {
  ES: NEURONUP_ES_CONFIG,
  US: NEURONUP_US_CONFIG,
  BR: NEURONUP_BR_CONFIG,
  FR: NEURONUP_FR_CONFIG,
  DE: NEURONUP_DE_CONFIG,
  IT: NEURONUP_IT_CONFIG,
  RU: NEURONUP_RU_CONFIG,
  AR: NEURONUP_AR_CONFIG
} as const;
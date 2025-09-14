import { useEffect } from 'react';

interface ThemeConfig {
  domains: string[];
  colors: {
    primary: string;
    h1: string;
  };
}

interface ThemeManagerProps {
  url: string;
}

// Configuración de temas - Fácil de expandir
const THEME_CONFIGS: ThemeConfig[] = [
  {
    domains: ['neuronup.com', 'neuronup.us'],
    colors: {
      primary: '#00abc7',
      h1: 'white'
    }
  },
  // Ejemplo para futuras configuraciones:
  // {
  //   domains: ['ejemplo.com', 'ejemplo.org'],
  //   colors: {
  //     primary: '#ff6b6b',
  //     h1: '#2c3e50'
  //   }
  // }
];

// Tema por defecto
const DEFAULT_THEME: ThemeConfig['colors'] = {
  primary: '#F5F3EF',
  h1: '#3C4044'
};

export const ThemeManager: React.FC<ThemeManagerProps> = ({ url }) => {
  useEffect(() => {
    const urlLower = url.toLowerCase();
    
    // Buscar configuración de tema que coincida con la URL
    const matchingTheme = THEME_CONFIGS.find(config =>
      config.domains.some(domain => urlLower.includes(domain))
    );
    
    // Usar tema encontrado o tema por defecto
    const theme = matchingTheme ? matchingTheme.colors : DEFAULT_THEME;
    
    // Actualizar las variables CSS
    document.documentElement.style.setProperty('--colorprimary', theme.primary);
    document.documentElement.style.setProperty('--h1-color', theme.h1);
  }, [url]);

  // Función para resetear al tema por defecto
  const resetTheme = () => {
    document.documentElement.style.setProperty('--colorprimary', DEFAULT_THEME.primary);
    document.documentElement.style.setProperty('--h1-color', DEFAULT_THEME.h1);
  };

  // Hacer la función de reset disponible globalmente si es necesaria
  useEffect(() => {
    // Agregar la función al objeto window para acceso global si se necesita
    (window as any).resetTheme = resetTheme;
    
    // Cleanup
    return () => {
      delete (window as any).resetTheme;
    };
  }, []);

  // Este componente no renderiza nada visible
  return null;
};
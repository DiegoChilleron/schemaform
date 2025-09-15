import { useEffect } from 'react';
import { getThemeFromURL } from '../config/companies';

interface ThemeManagerProps {
  url: string;
}

export const ThemeManager: React.FC<ThemeManagerProps> = ({ url }) => {
  useEffect(() => {
    // Usar el sistema centralizado de configuración de empresas
    const theme = getThemeFromURL(url);
    
    // Actualizar las variables CSS
    document.documentElement.style.setProperty('--colorprimary', theme.primary);
    document.documentElement.style.setProperty('--h1-color', theme.h1);
  }, [url]);

  // Función para resetear al tema por defecto
  const resetTheme = () => {
    const defaultTheme = getThemeFromURL('example.com');
    document.documentElement.style.setProperty('--colorprimary', defaultTheme.primary);
    document.documentElement.style.setProperty('--h1-color', defaultTheme.h1);
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
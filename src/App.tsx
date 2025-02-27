import { useState, ChangeEvent, useCallback } from "react";

import { InputForm } from "./components/Form/InputForm";
import { getSchemaOutputComponent } from "./helpers/getSchemaOutputComponent";
import { FormData, ImageDimensions } from "./types.ts";

// Definir los valores iniciales del formulario
const initialFormData: FormData = {
  url: "",
  type: "",
  title: "",
  description: "",
  domain: "",
  datePublished: "",
  dateModified: [],
  section: "",
  urlImage: "",
  authorType: "Organization",
  authorName: "",
  authorURL: "",
  authorRRSS: [],
  aggregateRating: true,
  viewCount: "121",
  ratingValue: "4.9"
};

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null);

  // Función para resetear el formulario
  const handleReset = useCallback(() => {
    setFormData(initialFormData);
    setImageDimensions(null);
  }, []);

  // Manejador general que procesa correctamente checkboxes y otros tipos de input.
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const target = e.target;
      if (target.type === "checkbox") {
        setFormData((prev) => ({
          ...prev,
          [target.name]: (target as HTMLInputElement).checked,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [target.name]: target.value,
        }));
      }
    },
    []
  );

  const handleDateModifiedChange = useCallback((newDates: string[]) => {
    setFormData((prev) => ({ ...prev, dateModified: newDates }));
  }, []);

  const handleAuthorRRSSChange = useCallback((newRRSS: string[]) => {
    setFormData((prev) => ({ ...prev, authorRRSS: newRRSS }));
  }, []);

  // Selecciona el componente de SchemaOutput según la URL.
  const SchemaOutputComponent = getSchemaOutputComponent(formData.url);

  return (
    <div className="app">
      <h1>Generador de código estructurado Schema (JSON-LD)</h1>
      <div className="p-2">
        <button 
          onClick={handleReset}
          className="btn-reset">
          Resetear
        </button>
      </div>
      <div className="app__container">
        <InputForm
          formData={formData}
          onInputChange={handleInputChange}
          onImageLoad={setImageDimensions}
          onDateModifiedChange={handleDateModifiedChange}
          onAuthorRRSSChange={handleAuthorRRSSChange}
        />
        <SchemaOutputComponent formData={formData} imageDimensions={imageDimensions} />
      </div>
    </div>
  );
};
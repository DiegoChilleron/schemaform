// src/App.tsx
import { useState, ChangeEvent, useCallback } from "react";
import { InputForm } from "./components/Form/InputForm";
import { getSchemaOutputComponent } from "./helpers/getSchemaOutputComponent";
import { FormData, ImageDimensions } from "./types.ts";

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    url: "",
    type: "",
    titulo: "",
    descripcion: "",
    datePublished: "",
    dateModified: [],
    seccion: "",
    urlImagen: "",
    authorType: "Organization",
    authorName: "NeuronUP",
    authorURL: "",
    authorRRSS: [],
    aggregateRating: false,
    viewCount: "",
    ratingValue: ""
  });

  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null);

  // Manejador general que procesa correctamente checkboxes y otros tipos de input.
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    },
    []
  );

  const handleDateModifiedChange = useCallback((newDates: string[]) => {
    setFormData((prev) => ({ ...prev, dateModified: newDates }));
  }, []);

  const handleAuthorRRSSChange = useCallback((newRRSS: string[]) => {
    setFormData((prev) => ({ ...prev, authorRRSS: newRRSS }));
  }, []);

  // Selecciona el componente de SchemaOutput según la URL
  const SchemaOutputComponent = getSchemaOutputComponent(formData.url);

  return (
    <div className="app">
      <h1>Generador de Schema JSON</h1>
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


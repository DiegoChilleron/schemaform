// src/components/Form/InputForm.tsx
import { ChangeEvent, useEffect, useCallback } from "react";
import { FormData } from "../../types";

interface InputFormProps {
  formData: FormData;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onImageLoad: (dimensions: { width: number; height: number } | null) => void;
  onDateModifiedChange: (newDates: string[]) => void;
  onAuthorRRSSChange: (newRRSS: string[]) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  formData,
  onInputChange,
  onImageLoad,
  onDateModifiedChange,
  onAuthorRRSSChange,
}) => {
  // Calcula las dimensiones reales de la imagen al salir del campo
  const handleImageBlur = useCallback(() => {
    if (!formData.urlImagen) {
      onImageLoad(null);
      return;
    }
    const img = new Image();
    img.src = formData.urlImagen;
    img.onload = () => onImageLoad({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => onImageLoad(null);
  }, [formData.urlImagen, onImageLoad]);

  // Extrae un slug de la URL para completar el campo "seccion"
  useEffect(() => {
    const urlParts = formData.url.split("/").filter((part) => part !== "");
    const lastSlug = urlParts[urlParts.length - 2] || "";
    if (lastSlug) {
      const formattedSlug = lastSlug.replace(/-/g, " ");
      const capitalizedSlug = formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
      onInputChange({
        target: { name: "seccion", value: capitalizedSlug },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [formData.url, onInputChange]);

  return (
    <form>
      <div className="inputForm__div">
        <label htmlFor="url">URL:</label>
        <input
          className="w-full"
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={onInputChange}
          placeholder="Introduce la URL de la página"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="type">Tipo:</label>
        <select id="type" name="type" value={formData.type} onChange={onInputChange}>
          <option value="Article">Article</option>
          <option value="NewsArticle">NewsArticle</option>
          <option value="BlogPosting">BlogPosting</option>
          <option value="Pagina">Pagina</option>
        </select>
      </div>

      <div className="inputForm__div">
        <label htmlFor="titulo">Título:</label>
        <input
          className="w-full"
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={onInputChange}
          placeholder="Introduce el título"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="descripcion">Descripción:</label>
        <input
          className="w-full"
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={onInputChange}
          placeholder="Introduce la descripción"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="datePublished">Fecha de publicación:</label>
        <input
          type="datetime-local"
          id="datePublished"
          name="datePublished"
          value={formData.datePublished}
          onChange={onInputChange}
        />
      </div>

      {/* Gestión de fechas de modificación */}
      <div className="py-2">
        <label>Fechas de modificación:</label>
        {formData.dateModified.map((date, index) => (
          <div key={index} className="p-2">
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => {
                const newDates = [...formData.dateModified];
                newDates[index] = e.target.value;
                onDateModifiedChange(newDates);
              }}
              placeholder="Introduce la fecha de modificación"
            />
            <button
              type="button"
              onClick={() => onDateModifiedChange(formData.dateModified.filter((_, i) => i !== index))}
            >
              Eliminar
            </button>
          </div>
        ))}
        <button type="button" onClick={() => onDateModifiedChange([...formData.dateModified, ""])}>
          Añadir fecha de modificación
        </button>
      </div>

      <div className="inputForm__div">
        <label htmlFor="seccion">Sección:</label>
        <input
          type="text"
          id="seccion"
          name="seccion"
          value={formData.seccion}
          onChange={onInputChange}
          placeholder="Introduce la sección"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="urlImagen">URL Imagen de portada:</label>
        <input
          className="w-full"
          type="text"
          id="urlImagen"
          name="urlImagen"
          value={formData.urlImagen}
          onChange={onInputChange}
          onBlur={handleImageBlur}
          placeholder="Introduce la URL de la imagen"
        />
      </div>

      {/* Datos del autor */}
      <div className="inputFormdiv__author">
        <div className="inputForm__div flex justify-between">
          <label htmlFor="authorType">Tipo de Autor:</label>
          <select id="authorType" name="authorType" value={formData.authorType} onChange={onInputChange}>
            <option value="Organization">Organization</option>
            <option value="Person">Person</option>
          </select>
        
          <label htmlFor="authorName">Nombre del Autor:</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={onInputChange}
            placeholder="Introduce el nombre del autor"
          />
        </div>

        <div className="inputForm__div">
          <label htmlFor="authorURL">URL del autor:</label>
          <input
            className="w-full"
            type="text"
            id="authorURL"
            name="authorURL"
            value={formData.authorURL}
            onChange={onInputChange}
            placeholder="Introduce la URL del autor"
          />
        </div>

        {/* Gestión de RRSS del autor */}
        <div className="py-2">
          <label>RRSS del autor:</label>
          {formData.authorRRSS.map((rrss, index) => (
            <div key={index} className="p-2">
              <input
              className="w-[50%]"
                type="text"
                value={rrss}
                onChange={(e) => {
                  const newRRSS = [...formData.authorRRSS];
                  newRRSS[index] = e.target.value;
                  onAuthorRRSSChange(newRRSS);
                }}
                placeholder="Introduce el perfil de red social del autor"
              />
              <button
                type="button"
                onClick={() =>
                  onAuthorRRSSChange(formData.authorRRSS.filter((_, i) => i !== index))
                }
              >
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={() => onAuthorRRSSChange([...formData.authorRRSS, ""])}>
            Añadir RRSS
          </button>
        </div>
      </div>

      <div className="inputForm__div">
        <label htmlFor="aggregateRating">
          <input
            type="checkbox"
            id="aggregateRating"
            name="aggregateRating"
            checked={formData.aggregateRating}
            onChange={onInputChange}
          />
          Añadir valoraciones de Google
        </label>
      </div>

      {formData.aggregateRating && (
        <div className="inputForm__div  flex justify-between">
          <div>
          <label htmlFor="viewCount">Número de valoraciones:</label>
          <input
            type="number"
            id="viewCount"
            name="viewCount"
            value={formData.viewCount}
            onChange={onInputChange}
            placeholder="100"
          />
          </div>
          <div>
          <label htmlFor="ratingValue">Puntuación:</label>
          <input
            type="number"
            id="ratingValue"
            name="ratingValue"
            value={formData.ratingValue}
            onChange={onInputChange}
            placeholder="4,9"
            step="0.1"
            min="0"
            max="5"
          />
          </div>
        </div>
      )}
    </form>
  );
};

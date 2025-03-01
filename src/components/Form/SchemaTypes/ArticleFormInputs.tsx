import React from "react";
import { FormData } from "../../../types";

interface ArticleFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  handleImageBlur: () => void;
  onDateModifiedChange: (newDates: string[]) => void;
  onAuthorRRSSChange: (newRRSS: string[]) => void;
}

export const ArticleFormInputs: React.FC<ArticleFormInputsProps> = ({
  formData,
  onInputChange,
  handleImageBlur,
  onDateModifiedChange,
  onAuthorRRSSChange,
}) => {
  return (
    <>
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
        <label htmlFor="title">Título:</label>
        <input
          className="w-full"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onInputChange}
          placeholder="Introduce el título"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="w-full"
          id="description"
          name="description"
          value={formData.description}
          onChange={onInputChange}
          placeholder="Introduce la descripción"
        />
      </div>

      <div className="inputForm__div w-full">
        <label htmlFor="urlImage">URL Imagen:</label>
        <input
          className="w-[70%]"
          type="text"
          id="urlImage"
          name="urlImage"
          value={formData.urlImage}
          onChange={onInputChange}
          onBlur={handleImageBlur}
          placeholder="Introduce la URL de la imagen de portada"
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
            <button type="button" onClick={() =>
              onDateModifiedChange(
                formData.dateModified.filter((_, i) => i !== index)
              )}
            >
              Eliminar
            </button>
          </div>
        ))}
        <button
          type="button" onClick={() => onDateModifiedChange([...formData.dateModified, ""])}>
          Añadir fecha de modificación
        </button>
      </div>

      <div className="inputForm__div">
        <label htmlFor="section">Sección:</label>
        <input
          className="w-full"
          type="text"
          id="section"
          name="section"
          value={formData.section}
          onChange={onInputChange}
          placeholder="Introduce la sección (se autocompleta con la URL)"
        />
      </div>



      <div className="inputFormdiv__author">
        <div className="inputForm__div flex flex-col md:flex-row justify-between">
          <div>
            <label htmlFor="authorType">Tipo de Autor:</label>
            <select
              id="authorType"
              name="authorType"
              value={formData.authorType}
              onChange={onInputChange}
            >
              <option value="Organization">Organization</option>
              <option value="Person">Person</option>
            </select>
          </div>
          <div>
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
                  onAuthorRRSSChange(
                    formData.authorRRSS.filter((_, i) => i !== index)
                  )
                }
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onAuthorRRSSChange([...formData.authorRRSS, ""])}
          >
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
        <div className="inputForm__div flex justify-between">
          <div>
            <label htmlFor="viewCount">Número de valoraciones:</label>
            <input
              type="number"
              id="viewCount"
              name="viewCount"
              value={formData.viewCount}
              onChange={onInputChange}
              placeholder="121"
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
    </>
  );
};

export default ArticleFormInputs;
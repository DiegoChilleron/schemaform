
import { FormData } from "../../../types";

interface PageFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

export const PageFormInputs: React.FC<PageFormInputsProps> = ({
  formData,
  onInputChange,
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
        <input
          className="w-full"
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={onInputChange}
          placeholder="Introduce la descripción"
        />
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
    </>
  );
};


import React from "react";
import { FormData, YouTubeVideo, UploadedVideo } from "../../../types";

interface ArticleFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  handleImageBlur: () => void;
  onDateModifiedChange: (newDates: string[]) => void;
  onAuthorRRSSChange: (newRRSS: string[]) => void;
  onYouTubeVideosChange: (newVideos: YouTubeVideo[]) => void;
  onUploadedVideosChange: (newVideos: UploadedVideo[]) => void;
}

export const ArticleFormInputs: React.FC<ArticleFormInputsProps> = ({
  formData,
  onInputChange,
  handleImageBlur,
  onDateModifiedChange,
  onAuthorRRSSChange,
  onYouTubeVideosChange,
  onUploadedVideosChange,
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



      <div className="inputFormdiv__subdiv">
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
        <label htmlFor="containsYouTubeVideo">
          <input
            type="checkbox"
            id="containsYouTubeVideo"
            name="containsYouTubeVideo"
            checked={formData.containsYouTubeVideo}
            onChange={onInputChange}
          />
          Contiene video de YouTube
        </label>
      </div>

      {formData.containsYouTubeVideo && (
        <div className="py-2">
          {formData.youtubeVideos.map((video, index) => (
            <div key={index} className="inputFormdiv__subdiv">
              <div className="inputForm__div">
                <label htmlFor={`video-url-${index}`}>URL del video:</label>
                <input
                  className="w-full"
                  type="text"
                  id={`video-url-${index}`}
                  value={video.url}
                  onChange={(e) => {
                    const newVideos = [...formData.youtubeVideos];
                    newVideos[index] = { ...newVideos[index], url: e.target.value };
                    onYouTubeVideosChange(newVideos);
                  }}
                  placeholder="Introduce la URL del video de YouTube"
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`video-name-${index}`}>Nombre del video:</label>
                <input
                  className="w-full"
                  type="text"
                  id={`video-name-${index}`}
                  value={video.name}
                  onChange={(e) => {
                    const newVideos = [...formData.youtubeVideos];
                    newVideos[index] = { ...newVideos[index], name: e.target.value };
                    onYouTubeVideosChange(newVideos);
                  }}
                  placeholder="Introduce el nombre del video"
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`video-description-${index}`}>Descripción del video:</label>
                <textarea
                  className="w-full"
                  id={`video-description-${index}`}
                  value={video.description}
                  onChange={(e) => {
                    const newVideos = [...formData.youtubeVideos];
                    newVideos[index] = { ...newVideos[index], description: e.target.value };
                    onYouTubeVideosChange(newVideos);
                  }}
                  placeholder="Introduce la descripción del video"
                  rows={3}
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  onYouTubeVideosChange(
                    formData.youtubeVideos.filter((_, i) => i !== index)
                  )
                }
              >
                Eliminar video
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onYouTubeVideosChange([...formData.youtubeVideos, { url: "", name: "", description: "" }])}
          >
            Añadir video de YouTube
          </button>
        </div>
      )}

      <div className="inputForm__div">
        <label htmlFor="containsUploadedVideo">
          <input
            type="checkbox"
            id="containsUploadedVideo"
            name="containsUploadedVideo"
            checked={formData.containsUploadedVideo}
            onChange={onInputChange}
          />
          Contiene video subido (WebM)
        </label>
      </div>

      {formData.containsUploadedVideo && (
        <div className="py-2">
          {formData.uploadedVideos.map((video, index) => (
            <div key={index} className="inputFormdiv__subdiv">
              <div className="inputForm__div">
                <label htmlFor={`uploaded-video-url-${index}`}>URL del video (.webm):</label>
                <input
                  className="w-full"
                  type="text"
                  id={`uploaded-video-url-${index}`}
                  value={video.url}
                  onChange={(e) => {
                    const newVideos = [...formData.uploadedVideos];
                    newVideos[index] = { ...newVideos[index], url: e.target.value };
                    onUploadedVideosChange(newVideos);
                  }}
                  placeholder="https://ejemplo.com/video.webm"
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`uploaded-video-name-${index}`}>Nombre del video:</label>
                <input
                  className="w-full"
                  type="text"
                  id={`uploaded-video-name-${index}`}
                  value={video.name}
                  onChange={(e) => {
                    const newVideos = [...formData.uploadedVideos];
                    newVideos[index] = { ...newVideos[index], name: e.target.value };
                    onUploadedVideosChange(newVideos);
                  }}
                  placeholder="Nombre del video"
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`uploaded-video-description-${index}`}>Descripción del video:</label>
                <textarea
                  className="w-full"
                  id={`uploaded-video-description-${index}`}
                  value={video.description}
                  onChange={(e) => {
                    const newVideos = [...formData.uploadedVideos];
                    newVideos[index] = { ...newVideos[index], description: e.target.value };
                    onUploadedVideosChange(newVideos);
                  }}
                  placeholder="Descripción del video"
                  rows={3}
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`uploaded-video-thumbnail-${index}`}>URL de la miniatura (opcional):</label>
                <input
                  className="w-full"
                  type="text"
                  id={`uploaded-video-thumbnail-${index}`}
                  value={video.thumbnailUrl || ""}
                  onChange={(e) => {
                    const newVideos = [...formData.uploadedVideos];
                    newVideos[index] = { ...newVideos[index], thumbnailUrl: e.target.value };
                    onUploadedVideosChange(newVideos);
                  }}
                  placeholder="Si vacío, usa la imagen del artículo"
                />
              </div>
              <div className="inputForm__div">
                <label htmlFor={`uploaded-video-duration-${index}`}>Duración (ISO 8601, opcional):</label>
                <input
                  className="w-full"
                  type="text"
                  id={`uploaded-video-duration-${index}`}
                  value={video.duration || ""}
                  onChange={(e) => {
                    const newVideos = [...formData.uploadedVideos];
                    newVideos[index] = { ...newVideos[index], duration: e.target.value };
                    onUploadedVideosChange(newVideos);
                  }}
                  placeholder="PT1M30S (1 minuto 30 segundos)"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  onUploadedVideosChange(
                    formData.uploadedVideos.filter((_, i) => i !== index)
                  )
                }
              >
                Eliminar video
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onUploadedVideosChange([...formData.uploadedVideos, { url: "", name: "", description: "", thumbnailUrl: "" }])}
          >
            Añadir video subido
          </button>
        </div>
      )}

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
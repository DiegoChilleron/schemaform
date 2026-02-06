
import { FormData, YouTubeVideo, UploadedVideo } from "../../../types";

interface PageFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onYouTubeVideosChange: (newVideos: YouTubeVideo[]) => void;
  onUploadedVideosChange: (newVideos: UploadedVideo[]) => void;
}

export const PageFormInputs: React.FC<PageFormInputsProps> = ({
  formData,
  onInputChange,
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
              placeholder="Introduce el número de valoraciones"
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
              placeholder="Introdcue la puntuación"
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


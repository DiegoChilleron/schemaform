
import { FormData, YouTubeVideo, UploadedVideo } from "../../../types";
import { YouTubeVideosSection } from "../shared/YouTubeVideosSection";
import { UploadedVideosSection } from "../shared/UploadedVideosSection";
import { AggregateRatingSection } from "../shared/AggregateRatingSection";

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

      <YouTubeVideosSection
        formData={formData}
        onInputChange={onInputChange}
        onYouTubeVideosChange={onYouTubeVideosChange}
      />

      <UploadedVideosSection
        formData={formData}
        onInputChange={onInputChange}
        onUploadedVideosChange={onUploadedVideosChange}
      />

      <AggregateRatingSection
        formData={formData}
        onInputChange={onInputChange}
      />
    </>
  );
};

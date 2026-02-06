import { useState, ChangeEvent, useCallback } from "react";

import { InputForm } from "./components/Form/InputForm";
import { ThemeManager } from "./components/ThemeManager";
import { getSchemaOutputComponent } from "./helpers/getSchemaOutputComponent";
import { FormData, ImageDimensions, FAQItem, HowToStep, YouTubeVideo, UploadedVideo } from "./types.ts";

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
  ratingValue: "4.9",
  containsYouTubeVideo: false,
  youtubeVideos: [],
  faqItems: [],
  faqSubType: "",
  totalTime: "",
  estimatedCost: "",
  supply: "",
  howToSteps: [],
  containsUploadedVideo: false,
  uploadedVideos: []
};

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null);

  const handleReset = useCallback(() => {
    setFormData(initialFormData);
    setImageDimensions(null);
    // Usar la función global de reset del tema
    if ((window as any).resetTheme) {
      (window as any).resetTheme();
    }
  }, []);

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

  const handleFAQItemsChange = useCallback((newItems: FAQItem[]) => {
    setFormData((prev) => ({ ...prev, faqItems: newItems }));
  }, []);

  const handleHowToStepsChange = useCallback((newSteps: HowToStep[]) => {
    setFormData((prev) => ({ ...prev, howToSteps: newSteps }));
  }, []);

  const handleYouTubeVideosChange = useCallback((newVideos: YouTubeVideo[]) => {
    setFormData((prev) => ({ ...prev, youtubeVideos: newVideos }));
  }, []);

  const handleUploadedVideosChange = useCallback((newVideos: UploadedVideo[]) => {
    setFormData((prev) => ({ ...prev, uploadedVideos: newVideos }));
  }, []);

  const SchemaOutputComponent = getSchemaOutputComponent(formData.url);

  return (
    <div className="app">
      <ThemeManager url={formData.url} />
      <h1>Generador de código estructurado Schema (JSON-LD)</h1>
      <div className="app__container">
        <InputForm
          formData={formData}
          onInputChange={handleInputChange}
          onImageLoad={setImageDimensions}
          onDateModifiedChange={handleDateModifiedChange}
          onAuthorRRSSChange={handleAuthorRRSSChange}
          onYouTubeVideosChange={handleYouTubeVideosChange}
          onUploadedVideosChange={handleUploadedVideosChange}
          onFAQItemsChange={handleFAQItemsChange}
          onHowToStepsChange={handleHowToStepsChange}
          onReset={handleReset}
        />
        <SchemaOutputComponent formData={formData} imageDimensions={imageDimensions} />
      </div>
    </div>
  );
};
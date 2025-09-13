import React, { ChangeEvent, useEffect, useCallback } from "react";
import { FormData, FAQItem, HowToStep } from "../../types";
import { ArticleFormInputs } from "./SchemaTypes/ArticleFormInputs";
import { PageFormInputs } from "./SchemaTypes/PageFormInputs";
import { EventFormInputs } from "./SchemaTypes/EventFormInputs";
import { FAQFormInputs } from "./SchemaTypes/FAQFormInputs";
import { HowToFormInputs } from "./SchemaTypes/HowToFormInputs";

interface InputFormProps {
  formData: FormData;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onImageLoad: (dimensions: { width: number; height: number } | null) => void;
  onDateModifiedChange: (newDates: string[]) => void;
  onAuthorRRSSChange: (newRRSS: string[]) => void;
  onFAQItemsChange: (items: FAQItem[]) => void;
  onHowToStepsChange: (steps: HowToStep[]) => void;
  onReset: () => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  formData,
  onInputChange,
  onImageLoad,
  onDateModifiedChange,
  onAuthorRRSSChange,
  onFAQItemsChange,
  onHowToStepsChange,
  onReset,
}) => {

  const handleImageBlur = useCallback(() => {
    if (!formData.urlImage) {
      onImageLoad(null);
      return;
    }
    const img = new Image();
    img.src = formData.urlImage;
    img.onload = () =>
      onImageLoad({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => onImageLoad(null);
  }, [formData.urlImage, onImageLoad]);

  // Extrae un slug de la URL para completar el campo "section"
  useEffect(() => {
    const urlParts = formData.url.split("/").filter((part) => part !== "");
    const lastSlug = urlParts[urlParts.length - 2] || "";
    if (lastSlug) {
      const formattedSlug = lastSlug.replace(/-/g, " ");
      const capitalizedSlug =
        formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);
      onInputChange({
        target: { name: "section", value: capitalizedSlug },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [formData.url, onInputChange]);

  return (
    <form>
      <div className="flex justify-between" >
      <div className="inputForm__div">
        <label htmlFor="type">Tipo:</label>
        <select id="type" name="type" value={formData.type} onChange={onInputChange}>
          <option value="">Selecciona...</option>
          <option value="Article">Article</option>
          <option value="NewsArticle">NewsArticle</option>
          <option value="BlogPosting">BlogPosting</option>
          <option value="Pagina">Pagina</option>
          <option value="Event">Evento</option>
          <option value="FAQ">FAQ</option>
          <option value="HowTo">Cómo Hacer (HowTo)</option>
        </select>
      </div>

      <div className="py-3">
        <button
          type="button"
          onClick={onReset}
          >
          Resetear
        </button>
      </div>
      </div>
      {(formData.type === "Article" || formData.type === "NewsArticle" || formData.type === "BlogPosting") && (
        <ArticleFormInputs
          formData={formData}
          onInputChange={onInputChange}
          handleImageBlur={handleImageBlur}
          onDateModifiedChange={onDateModifiedChange}
          onAuthorRRSSChange={onAuthorRRSSChange}
        />
      )}

      {formData.type === "Pagina" && (
        <PageFormInputs formData={formData} onInputChange={onInputChange} />
      )}

      {formData.type === "Event" && (
        <EventFormInputs formData={formData} onInputChange={onInputChange} />
      )}

      {formData.type === "FAQ" && (
        <FAQFormInputs
          formData={formData}
          onFAQItemsChange={onFAQItemsChange}
        />
      )}

      {formData.type === "HowTo" && (
        <HowToFormInputs
          formData={formData}
          onInputChange={onInputChange}
          onHowToStepsChange={onHowToStepsChange}
        />
      )}
    </form>
  );
};
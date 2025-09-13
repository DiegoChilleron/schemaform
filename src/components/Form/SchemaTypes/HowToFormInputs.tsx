import React from "react";
import { FormData, HowToStep } from "../../../types";

interface HowToFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onHowToStepsChange: (steps: HowToStep[]) => void;
}

export const HowToFormInputs: React.FC<HowToFormInputsProps> = ({
  formData,
  onInputChange,
  onHowToStepsChange,
}) => {
  const howToSteps = formData.howToSteps || [];

  const handleAddStep = () => {
    const newSteps = [...howToSteps, { name: "", text: "", url: "", image: "" }];
    onHowToStepsChange(newSteps);
  };

  const handleStepChange = (index: number, field: keyof HowToStep, value: string) => {
    const newSteps = [...howToSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    onHowToStepsChange(newSteps);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = howToSteps.filter((_: HowToStep, i: number) => i !== index);
    onHowToStepsChange(newSteps);
  };

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
        <label htmlFor="title">Título del Tutorial:</label>
        <input
          className="w-full"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onInputChange}
          placeholder="Introduce el título del tutorial"
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
          placeholder="Introduce una descripción del tutorial"
          rows={3}
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="urlImage">Imagen Principal:</label>
        <input
          className="w-full"
          type="text"
          id="urlImage"
          name="urlImage"
          value={formData.urlImage}
          onChange={onInputChange}
          placeholder="URL de la imagen principal"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="totalTime">Tiempo Total (en formato ISO 8601, ej: PT30M):</label>
        <input
          className="w-full"
          type="text"
          id="totalTime"
          name="totalTime"
          value={formData.totalTime || ""}
          onChange={onInputChange}
          placeholder="PT30M (30 minutos)"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="estimatedCost">Costo Estimado:</label>
        <input
          className="w-full"
          type="text"
          id="estimatedCost"
          name="estimatedCost"
          value={formData.estimatedCost || ""}
          onChange={onInputChange}
          placeholder="$0 o 0 USD"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="supply">Materiales/Herramientas Necesarias:</label>
        <textarea
          className="w-full"
          id="supply"
          name="supply"
          value={formData.supply || ""}
          onChange={onInputChange}
          placeholder="Lista de materiales o herramientas necesarias (separados por comas)"
          rows={2}
        />
      </div>

      <div className="howto-steps-section" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <h3>Pasos del Tutorial</h3>
          <button
            type="button"
            onClick={handleAddStep}
            style={{
              backgroundColor: "#007cba",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Añadir Paso
          </button>
        </div>

        {howToSteps.map((step: HowToStep, index: number) => (
          <div key={index} className="howto-step-container" style={{ 
            marginBottom: "20px", 
            border: "1px solid #ddd", 
            borderRadius: "4px",
            padding: "15px",
            backgroundColor: "#f9f9f9"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <h4>Paso {index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveStep(index)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  padding: "4px 8px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                Eliminar
              </button>
            </div>
            
            <div className="inputForm__div">
              <label htmlFor={`step-name-${index}`}>Nombre del Paso:</label>
              <input
                className="w-full"
                type="text"
                id={`step-name-${index}`}
                value={step.name}
                onChange={(e) => handleStepChange(index, 'name', e.target.value)}
                placeholder="Nombre breve del paso"
              />
            </div>
            
            <div className="inputForm__div">
              <label htmlFor={`step-text-${index}`}>Descripción del Paso:</label>
              <textarea
                className="w-full"
                id={`step-text-${index}`}
                value={step.text}
                onChange={(e) => handleStepChange(index, 'text', e.target.value)}
                placeholder="Descripción detallada del paso"
                rows={3}
              />
            </div>
            
            <div className="inputForm__div">
              <label htmlFor={`step-url-${index}`}>URL del Paso (opcional):</label>
              <input
                className="w-full"
                type="text"
                id={`step-url-${index}`}
                value={step.url}
                onChange={(e) => handleStepChange(index, 'url', e.target.value)}
                placeholder="URL relacionada con este paso"
              />
            </div>
            
            <div className="inputForm__div">
              <label htmlFor={`step-image-${index}`}>Imagen del Paso (opcional):</label>
              <input
                className="w-full"
                type="text"
                id={`step-image-${index}`}
                value={step.image}
                onChange={(e) => handleStepChange(index, 'image', e.target.value)}
                placeholder="URL de la imagen para este paso"
              />
            </div>
          </div>
        ))}

        {howToSteps.length === 0 && (
          <p style={{ textAlign: "center", color: "#666", fontStyle: "italic" }}>
            No hay pasos añadidos. Haz clic en "Añadir Paso" para comenzar.
          </p>
        )}
      </div>
    </>
  );
};
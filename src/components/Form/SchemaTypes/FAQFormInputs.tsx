import React from "react";
import { FormData, FAQItem } from "../../../types";

interface FAQFormInputsProps {
  formData: FormData;
  onFAQItemsChange: (items: FAQItem[]) => void;
}

export const FAQFormInputs: React.FC<FAQFormInputsProps> = ({
  formData,
  onFAQItemsChange,
}) => {
  const faqItems = formData.faqItems || [];

  const handleAddQuestion = () => {
    const newItems = [...faqItems, { question: "", answer: "" }];
    onFAQItemsChange(newItems);
  };


  const handleItemChange = (index: number, field: 'question' | 'answer', value: string) => {
    const newItems = [...faqItems];
    newItems[index] = { ...newItems[index], [field]: value };
    onFAQItemsChange(newItems);
  };


  const handleRemoveQuestion = (index: number) => {
    const newItems = faqItems.filter((_, i) => i !== index);
    onFAQItemsChange(newItems);
  };

  return (
    <>
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item-container" style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
          <div className="inputForm__div">
            <label htmlFor={`question-${index}`}>Pregunta {index + 1}:</label>
            <input
              className="w-full"
              type="text"
              id={`question-${index}`}
              value={item.question}
              onChange={(e) => handleItemChange(index, 'question', e.target.value)}
              placeholder="Introduce la pregunta"
            />
          </div>
          <div className="inputForm__div">
            <label htmlFor={`answer-${index}`}>Respuesta {index + 1}:</label>
            <textarea
              className="w-full"
              id={`answer-${index}`}
              value={item.answer}
              onChange={(e) => handleItemChange(index, 'answer', e.target.value)}
              placeholder="Introduce la respuesta"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveQuestion(index)}
            className="btn btn-danger"
          >
            Eliminar pregunta
          </button>
        </div>
      ))}

      <div className="inputForm__div">
        <button
          type="button" onClick={handleAddQuestion} className="btn btn-success">
          Añadir pregunta
        </button>
      </div>
    </>
  );
};
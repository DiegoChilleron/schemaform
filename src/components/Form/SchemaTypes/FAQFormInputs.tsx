
import { FormData } from "../../../types";

interface FAQFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

export const FAQFormInputs: React.FC<FAQFormInputsProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <>
      <div className="inputForm__div">
        <label htmlFor="question">Pregunta:</label>
        <input
          className="w-full"
          type="text"
          id="question"
          name="question"
          value={formData.question}
          onChange={onInputChange}
          placeholder="Introduce la pregunta"
        />    </div>
      <div className="inputForm__div">
        <label htmlFor="answer">Respuesta:</label>
        <textarea
          className="w-full"
          id="answer"
          name="answer"
          value={formData.answer}
          onChange={onInputChange}
          placeholder="Introduce la respuesta"
        ></textarea>
      </div>
      <div className="inputForm__div">
        <button type="button">Añadir pregunta</button>
      </div>
        </>
      );
    };
    
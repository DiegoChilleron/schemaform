
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
        <label htmlFor="url">URL:</label>
        <input
          className="w-full"
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={onInputChange}
          placeholder="Introduce la URL de la página"
        />    </div>
        </>
      );
    };
    

import { FormData } from "../../../types";

interface EventFormInputsProps {
  formData: FormData;
  onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}


export const EventFormInputs: React.FC<EventFormInputsProps> = ({
  formData,
  onInputChange,
}) => {
  return (
    <>
      <div className="inputForm__div">
        <label htmlFor="eventURL">URL del evento:</label>
        <input
          className="w-full"
          type="text"
          id="eventURL"
          name="eventURL"
          value={formData.eventURL}
          onChange={onInputChange}
          placeholder="Introduce la URL del evento"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="eventName">Nombre del evento:</label>
        <input
          className="w-full"
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={onInputChange}
          placeholder="Introduce el nombre del evento"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="eventDescription">Descripción del evento:</label>
        <textarea
          className="w-full"
          id="eventDescription"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={onInputChange}
          placeholder="Introduce una descripción"
        />
      </div>
<div className="flex justify-around">
      <div className="inputForm__div">
        <label htmlFor="startDate">Fecha/Hora de inicio:</label>
        <input
          type="datetime-local"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={onInputChange}
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="endDate">Fecha/Hora de fin:</label>
        <input
          type="datetime-local"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={onInputChange}
        />
      </div>
      </div>
      <div className="inputForm__div">
        <label htmlFor="eventImage">URL de la imagen:</label>
        <input
          className="w-full"
          type="text"
          id="eventImage"
          name="eventImage"
          value={formData.eventImage}
          onChange={onInputChange}
          placeholder="Introduce la URL de la imagen"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="performer">Artista/Organizador:</label>
        <input
          className="w-full"
          type="text"
          id="performer"
          name="performer"
          value={formData.performer}
          onChange={onInputChange}
          placeholder="Introduce el nombre del artista o entidad"
        />
      </div>

      <div className="inputForm__div">
        <label htmlFor="eventStatus">Estado del evento:</label>
        <select
          id="eventStatus"
          name="eventStatus"
          value={formData.eventStatus}
          onChange={onInputChange}
        >
          <option value="">Selecciona...</option>
          <option value="EventScheduled">Programado</option>
          <option value="EventCancelled">Cancelado</option>
          <option value="EventPostponed">Pospuesto</option>
          <option value="EventRescheduled">Reprogramado</option>
        </select>
      </div>
    </>
  );
};

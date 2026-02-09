import React from "react";
import { FormData } from "../../../types";

interface AggregateRatingSectionProps {
    formData: FormData;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const AggregateRatingSection: React.FC<AggregateRatingSectionProps> = ({
    formData,
    onInputChange,
}) => {
    return (
        <>
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

import React from "react";
import { FormData, UploadedVideo } from "../../../types";

interface UploadedVideosSectionProps {
    formData: FormData;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onUploadedVideosChange: (newVideos: UploadedVideo[]) => void;
}

export const UploadedVideosSection: React.FC<UploadedVideosSectionProps> = ({
    formData,
    onInputChange,
    onUploadedVideosChange,
}) => {
    return (
        <>
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
        </>
    );
};

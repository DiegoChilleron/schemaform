import React from "react";
import { FormData, YouTubeVideo } from "../../../types";

interface YouTubeVideosSectionProps {
    formData: FormData;
    onInputChange: React.ChangeEventHandler<HTMLInputElement>;
    onYouTubeVideosChange: (newVideos: YouTubeVideo[]) => void;
}

export const YouTubeVideosSection: React.FC<YouTubeVideosSectionProps> = ({
    formData,
    onInputChange,
    onYouTubeVideosChange,
}) => {
    return (
        <>
            <div className="inputForm__div">
                <label htmlFor="containsYouTubeVideo">
                    <input
                        type="checkbox"
                        id="containsYouTubeVideo"
                        name="containsYouTubeVideo"
                        checked={formData.containsYouTubeVideo}
                        onChange={onInputChange}
                    />
                    Contiene video de YouTube
                </label>
            </div>

            {formData.containsYouTubeVideo && (
                <div className="py-2">
                    {formData.youtubeVideos.map((video, index) => (
                        <div key={index} className="inputFormdiv__subdiv">
                            <div className="inputForm__div">
                                <label htmlFor={`video-url-${index}`}>URL del video:</label>
                                <input
                                    className="w-full"
                                    type="text"
                                    id={`video-url-${index}`}
                                    value={video.url}
                                    onChange={(e) => {
                                        const newVideos = [...formData.youtubeVideos];
                                        newVideos[index] = { ...newVideos[index], url: e.target.value };
                                        onYouTubeVideosChange(newVideos);
                                    }}
                                    placeholder="Introduce la URL del video de YouTube"
                                />
                            </div>
                            <div className="inputForm__div">
                                <label htmlFor={`video-name-${index}`}>Nombre del video:</label>
                                <input
                                    className="w-full"
                                    type="text"
                                    id={`video-name-${index}`}
                                    value={video.name}
                                    onChange={(e) => {
                                        const newVideos = [...formData.youtubeVideos];
                                        newVideos[index] = { ...newVideos[index], name: e.target.value };
                                        onYouTubeVideosChange(newVideos);
                                    }}
                                    placeholder="Introduce el nombre del video"
                                />
                            </div>
                            <div className="inputForm__div">
                                <label htmlFor={`video-description-${index}`}>Descripción del video:</label>
                                <textarea
                                    className="w-full"
                                    id={`video-description-${index}`}
                                    value={video.description}
                                    onChange={(e) => {
                                        const newVideos = [...formData.youtubeVideos];
                                        newVideos[index] = { ...newVideos[index], description: e.target.value };
                                        onYouTubeVideosChange(newVideos);
                                    }}
                                    placeholder="Introduce la descripción del video"
                                    rows={3}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    onYouTubeVideosChange(
                                        formData.youtubeVideos.filter((_, i) => i !== index)
                                    )
                                }
                            >
                                Eliminar video
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => onYouTubeVideosChange([...formData.youtubeVideos, { url: "", name: "", description: "" }])}
                    >
                        Añadir video de YouTube
                    </button>
                </div>
            )}
        </>
    );
};

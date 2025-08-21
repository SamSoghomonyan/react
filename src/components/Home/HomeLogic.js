import { useState, useEffect } from "react";
import data from "../../data.json";

export const useHomeLogic = () => {
    const [selected, setSelected] = useState(data.Featured);
    const [playVideo, setPlayVideo] = useState(false);

    const handleSelect = (item) => {
        setSelected(item);
        setPlayVideo(false);
        setTimeout(() => setPlayVideo(true), 500);
        sessionStorage.setItem("lastSelectedId", item.Id);
    };

    useEffect(() => {
        const lastId = sessionStorage.getItem("lastSelectedId");
        if (lastId) {
            const lastItem = data.TendingNow.find(v => v.Id === lastId);
            if (lastItem) setSelected(lastItem);
        }
    }, []);

    return { selected, playVideo, handleSelect };
};

import { useState, useEffect } from "react";
import data from "../../data.json";

export const useHomeLogic = () => {
    const [selected, setSelected] = useState(data.Featured);
    const [playVideo, setPlayVideo] = useState(false);
    const [trending, setTrending] = useState(data.TendingNow);

    const handleSelect = (item) => {
        setSelected(item);
        setPlayVideo(false);

        setTimeout(() => setPlayVideo(true), 2000);

        sessionStorage.setItem("lastSelectedId", item.Id);

        setTrending((prev) => {
            const filtered = prev.filter((v) => v.Id !== item.Id);
            return [item, ...filtered];
        });
    };

    useEffect(() => {
        const lastId = sessionStorage.getItem("lastSelectedId");
        if (lastId) {
            const lastItem = data.TendingNow.find((v) => v.Id === lastId);
            if (lastItem) {
                setSelected(lastItem);
                const filtered = data.TendingNow.filter((v) => v.Id !== lastId);
                setTrending([lastItem, ...filtered]);
                return;
            }
        }
        setTrending(data.TendingNow);
    }, []);

    return { selected, playVideo, handleSelect, trending };
};

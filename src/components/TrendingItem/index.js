import React from "react";
import "./style.css";

const TrendingItem = ({ item, getImage, onSelect }) => {
    console.log(item);
    return (
        <div className="trending-item" onClick={() => onSelect(item)}>
            <img src={getImage(item.CoverImage)} alt={item.Title} />
        </div>
    );
};

export default TrendingItem;

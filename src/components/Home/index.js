import React, { useEffect } from "react";
import SidebarMenu from "../SidebarMenu";
import { useHomeLogic } from "./HomeLogic";
import * as Images from "../../assets";
import TrendingItem from "../TrendingItem";
import data from "../../data.json";
import "./style.css";

const imageMap = {
    "FeaturedCoverImage.png": Images.FeaturedCoverImage,
    "https_specials-1.png": Images.specials1,
    "https_specials-2.png": Images.specials2,
    "https_specials-3.png": Images.specials3,
    "https_specials-4.png": Images.specials4,
    "https_specials-5.png": Images.specials5,
    "https_specials-6.png": Images.specials6,
    "https_specials-7.png": Images.specials7,
    "https_specials-8.png": Images.specials8,
};

const getImage = (name) => imageMap[name] || "";

const Home = () => {
    const { selected, playVideo, handleSelect } = useHomeLogic();

    useEffect(() => {
        const container = document.querySelector(".trending-items-wrapper");
        const onWheel = (e) => {
            if (container) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };
        container?.addEventListener("wheel", onWheel);
        return () => container?.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div className="home-container">
            <SidebarMenu />

            {!playVideo ? (
                <img src={getImage(selected.CoverImage)} alt="" className="bg-image" />
            ) : (
                <video
                    src={selected.VideoUrl}
                    autoPlay
                    muted
                    loop
                    className="bg-video"
                />
            )}

            <div className="overlay">
                <div className="featured-content">
                    <h2 className="category">{selected.Category}</h2>
                    <h1 className="title">{selected.Title}</h1>
                    <p className="meta">
                        {selected.ReleaseYear} {selected.MpaRating} {Math.floor(selected.Duration / 60)}h {selected.Duration % 60}m
                    </p>
                    <p className="description">{selected.Description}</p>
                    <div className="buttons">
                        <button className="play">▶ Play</button>
                        <button className="info">More Info</button>
                    </div>
                </div>

                <div className="trending-section">
                    <h3>Trending Now</h3>
                    <div className="trending-items-wrapper">
                        <div className="trending-items">
                            {data.TendingNow.map((item) => (
                                <TrendingItem
                                    key={item.Id}
                                    item={item}
                                    getImage={getImage}
                                    onSelect={handleSelect}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

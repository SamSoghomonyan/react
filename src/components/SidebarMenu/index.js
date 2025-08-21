import React, { useState } from "react";
import "./style.css";
import homeIcon from '../../assets/icons/Group 46.png';
import searchIcon from '../../assets/icons/ICON - Search.png';
import TVShowIcon from '../../assets/icons/Group 54.png';
import MovieIcon from '../../assets/icons/Group 53.png';
import GenreIcon from '../../assets/icons/Group 56.png';
import WatchLaterIcon from '../../assets/icons/Group 47.png';

const menuItems = [
    { name: "Home", icon: homeIcon },
    { name: "Search", icon: searchIcon },
    { name: "TV Shows", icon: TVShowIcon },
    { name: "Movies", icon: MovieIcon },
    { name: "Genres", icon: GenreIcon },
    { name: "Watch Later", icon: WatchLaterIcon },
];

const bottomTexts = ["Language", "Get Help", "Exit"];

const SidebarMenu = () => {
    const [open, setOpen] = useState(false);
    const userName = "John Doe";

    return (
        <div
            className={`sidebar-menu ${open ? "open" : ""}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="sidebar-user">
                {userName}
            </div>

            <div className="menu-items">
                {menuItems.map((item) => (
                    <div className="menu-item" key={item.name}>
                        <img src={item.icon} alt={item.name} />
                        {open && <span>{item.name}</span>}
                    </div>
                ))}
            </div>

            {open && (
                <div className="menu-bottom">
                    {bottomTexts.map((text) => (
                        <div className="menu-item-text" key={text}>
                            {text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarMenu;

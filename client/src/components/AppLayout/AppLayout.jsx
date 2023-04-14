import React from 'react'
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
import { Outlet } from "react-router-dom";
export default function AppLayout() {
    const slides = [
        { url: "/images/cover2.jpeg", title: "boat" },
        { url: "/images/cover.png", title: "beach" }
    ];
    const containerStyles = {
        width: "100%",
        height: "250px",
        margin: "0 auto",
    };
    return (
        <div className='wrapper'>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <Filter />
            <div className="search_Container">
                <div className="search_box">
                    <SearchBar />
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}
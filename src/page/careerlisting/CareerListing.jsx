import React, { useState, useRef, useEffect } from 'react';
import house from "../../assests/house.svg";
import Vector from "../../assests/Vector.svg";
import Header from "../../components/Header.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import briefcase from "../../assests/briefcase.svg";
import { fieldName } from '../../data.js';
import Filters from '../../components/Filters.jsx';
import SearchBar from '../../components/SearchBar.jsx';

function CareerListing() {


    return (
        <div className="background1 relative min-h-screen w-full font-space-grotesk overflow-x-hidden">
            <Header />
            <Sidebar Vector={Vector} house={house} briefcase={briefcase} />

            <main className="relative z-10 flex flex-col items-center pt-4 md:pt-[45px] px-3 md:px-6 pb-24 md:pb-8 md:ml-20">
                <div className="w-full max-w-[900px]">
                    <SearchBar />
                    <Filters />

                    <div>


                    </div>


                </div>
            </main>
        </div>
    );
}

export default CareerListing;
import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

import TitleSection from '../components/homePage/TitleSection';
import ParalaxSection from '../components/homePage/ParalaxSection';
import FeaturesSection from '../components/homePage/FeaturesSection';

import './paralax.css';


const IndexPage = () => {
    return (
        <>
            <TitleSection />
            <ParalaxSection />
            <FeaturesSection />
        </>
    );
}

export default IndexPage

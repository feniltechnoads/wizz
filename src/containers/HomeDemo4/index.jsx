import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        Services,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo4/data-HomeDemo4.js';

// import PlatformIco from '../../data/data-containers/HomeDemo4/data-PlatformIco.json';

import SecPricesInfo from '../../data/data-containers/HomeDemo4/data-SecPricesInfo';
// import FeaturesOtherTop from '../../data/data-containers/HomeDemo4/data-FeaturesOtherTop.json';
// import FeaturesOtherDown from '../../data/data-containers/HomeDemo4/data-FeaturesOtherDown.json';
// import TokenDistributionInfo from '../../data/data-containers/HomeDemo4/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo4/data-RoadmapInfo.json';
// import FaqInfo from '../../data/data-containers/HomeDemo4/data-FaqInfo.json';

import {
        // HomeDemo4Wwhitepaper,
        HomeDemo4About3,
        HomeDemo4AboutUs
        } from '../../utils/allImgs'

import './style/HomeDemo4.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
// import AboutOther from '../../components/AboutOther'
import SecPrices from '../../components/SecPrices'

// import SecAbout from '../../components/SecAbout'
// import FuelFeatures from '../../components/FuelFeatures'
// import Features2 from '../../components/Features2'
// import SpreadMap from '../../components/SpreadMap'
// import SmartContract from '../../components/SmartContract'
// import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
// import Faq from '../../components/Faq'
// import OurTeam from '../../components/OurTeam'
// import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import OurServices from './OurServices'
// import OurPlatform from './OurPlatform'
import Ournodes from "./Ournodes";
import AboutUs from "../../components/AboutUs";
// import TokenFeatures from "./TokenFeatures"



const HomeDemo4Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Wizz Token" />
        <SecHeroSection
            ClassSec="hero-section moving section-padding"
            ClassDiv="col-12 col-lg-6 col-md-12 imgDiv"
            specialHead="Creative landing page template"
            title1="Node Up."
            title2="Contribute to"
            title3="the better world."
            join= "Join the DeFi revolution through a NFT Node. It's time to start a stable passive income!"
            link1="Buy Node"
            link2="White Paper"
            para= "Get your WIZZ Node today and earn a passive income for years."
            img={HomeDemo4About3}
        />

        <AboutUs 
            HomeDemo4AboutUs={HomeDemo4AboutUs}
        />

        <OurServices data={Services} />
        <SecPrices
            ClassSec="features section-padding-0-100"
            data={SecPricesInfo}
        />
        <div className="clearfix" />
        {/* <AboutOther
            ClassTitle="gradient-text"
        /> */}
        {/* <OurPlatform data={PlatformIco} /> */}

        <Ournodes />

        
        
        {/* <SpreadMap
            Wwhitepaper={HomeDemo4Wwhitepaper}
        /> */}
        {/* <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text"
        />
        {/* <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        /> */}
        {/* <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        /> */}
        {/* <Subscribe /> */}
        <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text"
        />
        <FooterPages
            ClassSpanTitle="gradient-text"
        />
      </div>
    );
};

export default HomeDemo4Container
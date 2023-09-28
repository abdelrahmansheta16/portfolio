import React from "react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import certificate1 from "./images/abdelrahmansheta16gmail-com-Blockchain-amp-Bitcoin-101-Blockchain-amp-Bitcoin-101-v3-Moralis-Academy.jpg";
import certificate2 from "./images/abdelrahmansheta16gmail-com-Build-an-NFT-Marketplace-Ethereum-Dapp-Programming-v3-Moralis-Academy.jpg";
import certificate3 from "./images/abdelrahmansheta16gmail-com-Chainlink-Programming-101-Chainlink-101-v3-Moralis-Academy.jpg";
import certificate4 from "./images/abdelrahmansheta16gmail-com-Ethereum-101-Ethereum-101-v3-Moralis-Academy.jpg";
import certificate5 from "./images/abdelrahmansheta16gmail-com-Ethereum-Smart-Contract-Programming-101-Ethereum-Smart-Contract-Programming-101-v3-Moralis-Academy.jpg";
import certificate6 from "./images/abdelrahmansheta16gmail-com-Master-DeFi-in-2022-DeFi-101-v3-Moralis-Academy.jpg";
import certificate7 from "./images/solidity-ethereum-and-blockchain-the-complete-developer-s-guide.jpg";
import certificate8 from "./images/web3-masterclass-blockchain-dapps-daos-more.jpg";
import certificate9 from "./images/ezgif.com-optimize.gif";
import certificate10 from "./images/certificate-of-completion-for-complete-next-js-developer-in-2022-zero-to-mastery.jpg";
import certificate11 from "./images/Coursera QWSTEDZAZHXX.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Certificates.css";


SwiperCore.use([Pagination, EffectCoverflow]);

const Certificates = () => {
  return (
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">My certificates from one of the biggest blockchain academies - Moralis Academy.</p>

      <div className="slideshow">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
        >
          <SwiperSlide>
            <img src={certificate11} alt="Certificate" className="certificate-img" style={{ "height": "35vw", "width": "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate1} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate2} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate3} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate4} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate5} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate6} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate7} alt="Certificate" className="certificate-img" style={{ "height": "35vw","width":"100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate8} alt="Certificate" className="certificate-img" style={{ "height": "35vw", "width": "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={certificate10} alt="Certificate" className="certificate-img" style={{ "height": "35vw", "width": "100vw" }} />
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://opensea.io/assets/matic/0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6/15055/">
              <img src={certificate9} alt="Certificate" className="certificate-img" style={{ "height": "35vw", "width": "100vw" }} />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default Certificates;
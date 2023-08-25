import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown, BsWhatsapp } from "react-icons/bs";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    const width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  };

  const getAlertSize = () => {
    const width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  };

  const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>
            💻{"   "}<a href="mailto:abdelrahmansheta16@gmail.com" className="contact-link">Hire Me!</a>
            <span className="follow-me-link">🐦{"   "}</span><a href="https://twitter.com/abdelra14880048" className="contact-link">Follow Me!</a>
          </Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      );
    }else{
      return null;
    }
  };

  return(
    <>
      <Alert />
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title">
              <Heading as='h1' fontSize={getFontSize()} size='4xl'>
                Hi! 👋
              </Heading>
              <Heading as='h1' fontSize={getFontSize()} size='4xl'>
                I&apos;m <span className="name">Abdo</span>
              </Heading>
            </div>
            <div className="about-text-desc">
              <Text fontSize='3xl'>Experienced <span className="name">BLOCKCHAIN DEVELOPER</span> from Egypt, dedicated to the web3 industry. With 3+ years of expertise, I&apos;m passionate about innovation and continuous learning. Let&apos;s connect to drive blockchain solutions forward!</Text>
            </div>

            <div className="icons">
              <a href="https://github.com/abdelrahmansheta16" target="_blank" rel="noreferrer">
                <AiFillGithub className="icon" />
              </a>
              <a href="https://twitter.com/abdelra14880048" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle className="icon" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=201033834714" target="_blank" rel="noreferrer">
                <BsWhatsapp className="icon" />
              </a>
            </div>

            <a href="mailto:abdelrahmansheta16@gmail.com">
              <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
                Contact Me
              </Button>
            </a>
          </div>
          <div className="about-avatar">
            <img src={avatar} className="avatar" alt="Abdelrahman" />
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="bottom-icon">
            <BsChevronDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
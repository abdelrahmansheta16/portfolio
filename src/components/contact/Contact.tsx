import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "abdelrahmansheta16@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:abdelrahmansheta16@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "@abdelra14880048",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/abdelra14880048",
  },
  {
    name: "WHATSAPP:",
    info: "@Abdo",
    icon: <BsWhatsapp className="contact-icon" />,
    url: "https://api.whatsapp.com/send/?phone=201033834714",
  },
  {
    name: "DISCORD:",
    info: "abdelrahman_12221",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/1142697789223088130",
  },
  {
    name: "GitHub:",
    info: "@abdelrahmansheta16",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/abdelrahmansheta16",
  },
  {
    name: "LOCATION & ZONE:",
    info: "Egypt, UTC+2",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/egypt",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contact Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="mailto:abdelrahmansheta16@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
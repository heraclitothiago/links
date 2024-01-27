import React from 'react';
import { TbFaceIdError } from "react-icons/tb";
import {
    FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaSkype,
    FaYoutube, FaTelegram, FaPinterest, FaLinkedin, FaSnapchat, FaDiscord
} from 'react-icons/fa';
import { SiGooglecalendar } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6"

const iconMapping = {
    FaInstagram, FaFacebook, FaTiktok,
    FaWhatsapp, FaYoutube, FaTelegram,
    SiGooglecalendar, FaXTwitter, FaPinterest,
    FaLinkedin, FaSnapchat, FaSkype, FaDiscord
};

export default function SocialLinks({ link, icon }) {
    const IconComponent = iconMapping[icon];

    return (
        <a href={link || "#"} target='_blank' rel='noopener noreferrer'>
            {IconComponent ? <IconComponent /> : <TbFaceIdError />}
        </a>
    );
}

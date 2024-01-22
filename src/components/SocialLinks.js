import React from 'react';
import { TbFaceIdError } from "react-icons/tb";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaYoutube, FaTelegram } from 'react-icons/fa';
import { SiGooglecalendar } from "react-icons/si";

const iconMapping = {
    FaInstagram,
    FaFacebook,
    FaTiktok,
    FaWhatsapp,
    FaYoutube,
    FaTelegram,
    SiGooglecalendar
};

export default function SocialLinks({ link, icon }) {
    const IconComponent = iconMapping[icon];

    return (
        <a href={link || "#"} target='_blank' rel='noopener noreferrer'>
            {IconComponent ? <IconComponent /> : <TbFaceIdError />}
        </a>
    );
}

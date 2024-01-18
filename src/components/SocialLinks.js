import React from 'react'
import { TbFaceIdError } from "react-icons/tb";
import ShortUniqueId from 'short-unique-id';


export default function SocialLinks(props) {
    const { socials } = props.elements
    const uid = new ShortUniqueId();
    return (
        <>
            {socials.map(social => (
                <a key={uid.rnd()} href={social.url || "#"} target='_blank' rel='noopener noreferrer'>
                    {social.icon ? <social.icon /> : <TbFaceIdError />} 
                </a>
            ))}
        </>
    );
}


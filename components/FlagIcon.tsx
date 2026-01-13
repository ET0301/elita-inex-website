import React from 'react';
import { Language } from '../i18n/translations';

interface FlagIconProps {
    countryCode: Language;
    className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, className = "w-6 h-4" }) => {
    const flags: Record<Language, React.ReactNode> = {
        en: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
                <clipPath id="s">
                    <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="t">
                    <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                </clipPath>
                <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </g>
            </svg>
        ),
        sq: (
            <img src="/albania_custom.png" alt="Albania Flag" className={`${className} object-cover`} />
        ),
        de: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className={className}>
                <rect width="5" height="3" y="0" x="0" fill="#000" />
                <rect width="5" height="2" y="1" x="0" fill="#D00" />
                <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
            </svg>
        ),
        hr: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" className={className}>
                <rect width="1200" height="600" fill="#00f" />
                <rect width="1200" height="400" fill="#fff" />
                <rect width="1200" height="200" fill="#f00" />
                <path fill="#fff" stroke="#bdf" strokeWidth="15" d="M495,291l7-10l7,10l-22,10h222l-22-10l7-10l7,10l-22,10h-23l-7-10l-8,10h-23l6-10l8,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l8,10h-35v45h222v-34l-8-10l-7,10h-22l7-10l8,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10h-22l7-10l7,10z" />
                <path fill="red" d="M600 200h44v44h-44zM688 200h44v44h-44zM556 244h44v44h-44zM644 244h44v44h-44zM732 244h44v44h-44zM512 288h44v44h-44zM600 288h44v44h-44zM688 288h44v44h-44zM556 332h44v44h-44zM644 332h44v44h-44zM732 332h44v44h-44zM512 376h44v44h-44zM600 376h44v44h-44zM688 376h44v44h-44z" />
                <path opacity="0" fill="none" stroke="red" strokeWidth="10" d="M600 198h176v220h-264v-176h88z" />
            </svg>
        ),
        mk: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 420" className={className}>
                <path fill="#d20000" d="M0 0h840v420H0z" />
                <circle cx="420" cy="210" r="50" fill="#ffe600" />
                <path stroke="#ffe600" strokeWidth="50" d="M420 210h630M420 210v315M420 210H-210M420 210V-105" />
                <path stroke="#ffe600" strokeWidth="42" d="M420 210l252 252M420 210L168 462M420 210L672 -42M420 210L168 -42" />
                <circle cx="420" cy="210" r="40" fill="#d20000" />
                <circle cx="420" cy="210" r="35" fill="#ffe600" />
            </svg>
        ),
        no: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16" className={className}>
                <rect width="22" height="16" fill="#ba0c2f" />
                <path d="M0,8h22M8,0v16" stroke="#fff" strokeWidth="4" />
                <path d="M0,8h22M8,0v16" stroke="#00205b" strokeWidth="2" />
            </svg>
        )
    };

    return <>{flags[countryCode] || flags.en}</>;
};

import { Icon } from "@wordpress/icons";

const IconUnstyle = () => (
    <Icon
        icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <defs>
                    <linearGradient id="eraserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:"#8b5cf6", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#ec4899", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                <path d="M18.3,4.3l1.5,1.5c0.5,0.5,0.8,1.2,0.8,1.9v2.8c0,0.7-0.3,1.4-0.8,1.9L11,21.2C10.5,21.7,9.8,22,9.1,22 c-0.7,0-1.4-0.3-1.9-0.8l-1.5-1.5l-1.5-1.5c-0.5-0.5-0.8-1.2-0.8-1.9v-2.8c0-0.7,0.3-1.4,0.8-2L13,2.8C13.5,2.3,14.2,2,14.9,2 c0.7,0,1.4,0.3,1.9,0.8L18.3,4.3z M10.1,17.1l8.5-8.5c0.5-0.5,0.5-1.4,0-1.9l-2.8-2.8c-0.2-0.2-0.6-0.4-1-0.4s-0.7,0.1-0.9,0.4 l-8.5,8.5c-0.5,0.5-0.5,1.4,0,1.9l2.8,2.8C8.7,17.6,9.6,17.6,10.1,17.1z"
                    fill="none"
                    stroke="url(#eraserGradient)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round" />
                <path d="M18.3,4.3l1.5,1.5c0.5,0.5,0.8,1.2,0.8,1.9v2.8c0,0.7-0.3,1.4-0.8,1.9L11,21.2C10.5,21.7,9.8,22,9.1,22 c-0.7,0-1.4-0.3-1.9-0.8l-1.5-1.5l-1.5-1.5c-0.5-0.5-0.8-1.2-0.8-1.9v-2.8c0-0.7,0.3-1.4,0.8-2L13,2.8C13.5,2.3,14.2,2,14.9,2 c0.7,0,1.4,0.3,1.9,0.8L18.3,4.3z M10.1,17.1l8.5-8.5c0.5-0.5,0.5-1.4,0-1.9l-2.8-2.8c-0.2-0.2-0.6-0.4-1-0.4s-0.7,0.1-0.9,0.4 l-8.5,8.5c-0.5-0.5-0.5,1.4,0,1.9l2.8,2.8C8.7,17.6,9.6,17.6,10.1,17.1z"
                    fill="#f8fafc"
                    opacity="0.1" />
            </svg>
        }
    />
);

export default IconUnstyle;
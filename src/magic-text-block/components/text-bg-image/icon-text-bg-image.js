import { Icon } from "@wordpress/icons";
const IconBgImage = () => (
    <Icon
        icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                <defs>

                    <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="8" height="8">
                        <rect width="8" height="8" fill="#4f46e5" />
                        <circle cx="2" cy="2" r="1.5" fill="#7c3aed" />
                        <circle cx="6" cy="6" r="1" fill="#ec4899" />
                        <rect x="4" y="1" width="2" height="2" fill="#06b6d4" />
                        <rect x="1" y="5" width="2" height="2" fill="#10b981" />
                    </pattern>

                    <pattern id="strokePattern" patternUnits="userSpaceOnUse" width="2" height="2">
                        <rect width="2" height="2" fill="none" />
                        <rect width="2" height="2" fill="rgba(0,0,0,0.2)" />
                    </pattern>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="2" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />

                <text x="12" y="16"
                    text-anchor="middle"
                    font-family="Arial, sans-serif"
                    font-size="12"
                    font-weight="bold"
                    fill="url(#imagePattern)"
                    stroke="rgba(0,0,0,0.2)"
                    stroke-width="0.5">Aa</text>

                <g transform="translate(16, 4)">
                    <rect width="6" height="5" rx="1" fill="#6b7280" opacity="0.7" />
                    <rect x="1" y="1" width="4" height="3" rx="0.5" fill="white" />
                    <circle cx="2.5" cy="2" r="0.5" fill="#6b7280" />
                    <path d="M1.5 3.5 L2.5 2.5 L3.5 3.5 L4.5 2.5" stroke="#6b7280" stroke-width="0.3" fill="none" />
                </g>

                <g transform="translate(3, 17)">
                    <path d="M0 4 L1.5 2.5 L4 5 L2.5 6.5 Z" fill="#f59e0b" />
                    <circle cx="2" cy="1" r="1" fill="#374151" />
                    <path d="M1.5 0.5 L2.5 1.5" stroke="white" stroke-width="0.3" />
                </g>
            </svg>
        }
    />
);
export default IconBgImage;
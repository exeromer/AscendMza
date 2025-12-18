interface IconProps {
    className?: string;
}

export const MapIcon = ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.75 5.03467V18.5827L15.1127 20.2757L12.1947 19.4782L9.01014 18.7705L2.25 20.4606V6.9144L8.98986 5.22944L12.5553 6.02176L15.1259 6.72429L21.75 5.03467ZM14.3693 8.07252L12.1947 7.47821L9.75 6.93495V17.3984L12.5553 18.0218L14.3693 18.5175V8.07252ZM15.8693 18.5347L20.25 17.4173V6.9653L15.8693 8.0827V18.5347ZM8.25 17.4144V6.96057L3.75 8.08557V18.5394L8.25 17.4144Z" fill="currentColor"></path>
        </g>
    </svg>
);
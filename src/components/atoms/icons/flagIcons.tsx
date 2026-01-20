export const ArgentinaFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="#F4F4F4" />
    <path fill="#74ACDF" d="M0 256c0-141.38 114.62-256 256-256S512 114.62 512 256v-85.33H0V256z" />
    <path fill="#74ACDF" d="M0 256c0 141.38 114.62 256 256 256s256-114.62 256-256v85.33H0V256z" />
    <circle cx="256" cy="256" r="64" fill="#F6B40E" />
  </svg>
);

export const USAFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="circle-clip">
        <circle cx="256" cy="256" r="256" />
      </clipPath>
    </defs>
    <g clipPath="url(#circle-clip)">
      <path fill="#B22234" d="M0 0h512v512H0z" />
      <path fill="#FFF" d="M0 39.38h512v39.38H0zm0 78.77h512v39.38H0zm0 78.77h512v39.38H0zm0 78.77h512v39.38H0zm0 78.77h512v39.38H0zm0 78.77h512v39.38H0z" />
      <path fill="#3C3B6E" d="M0 0h240v275.69H0z" />
      {/* Estrellas simplificadas */}
      <circle cx="40" cy="40" r="12" fill="#FFF" /> <circle cx="120" cy="40" r="12" fill="#FFF" /> <circle cx="200" cy="40" r="12" fill="#FFF" />
      <circle cx="80" cy="80" r="12" fill="#FFF" /> <circle cx="160" cy="80" r="12" fill="#FFF" />
      <circle cx="40" cy="120" r="12" fill="#FFF" /> <circle cx="120" cy="120" r="12" fill="#FFF" /> <circle cx="200" cy="120" r="12" fill="#FFF" />
      <circle cx="80" cy="160" r="12" fill="#FFF" /> <circle cx="160" cy="160" r="12" fill="#FFF" />
      <circle cx="40" cy="200" r="12" fill="#FFF" /> <circle cx="120" cy="200" r="12" fill="#FFF" /> <circle cx="200" cy="200" r="12" fill="#FFF" />
    </g>
  </svg>
);

export const BrazilFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="#009739" />
    <path fill="#FEDD00" d="M256 96L436 256 256 416 76 256z" />
    <circle cx="256" cy="256" r="100" fill="#002776" />
    <path fill="none" stroke="#FFF" strokeWidth="12" d="M176 280s40-40 160-20" />
  </svg>
);
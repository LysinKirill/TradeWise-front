import createSvgIcon from '../createSvgIcon';

export const Settings = createSvgIcon(
  <>
    <g clipPath="url(#a)">
      <rect fill="currentColor" height="2" rx="1" width="16" y="2.5"/>
      <rect fill="currentColor" height="2" rx="1" width="16" y="11.5"/>
      <circle cx="10" cy="3.5" fill="#BABCD1" r="2.5" stroke="#fff" strokeWidth="2"/>
      <circle cx="6" cy="12.5" fill="#BABCD1" r="2.5" stroke="#fff" strokeWidth="2"/>
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h16v16H0z" fill="currentColor"/>
      </clipPath>
    </defs>
  </>,
  'Settings',
  {
    viewBox: '0 0 16 16',
  },
);

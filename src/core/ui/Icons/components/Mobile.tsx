import createSvgIcon from '../createSvgIcon';

export const Mobile = createSvgIcon(
  <>
    <path 
      clipRule="evenodd" 
      d="M2 2c0-1.10457.89543-2 2-2h8c1.1046 0 2 .89543 2 2v12c0 1.1046-.8954 2-2 2H4c-1.10457 0-2-.8954-2-2V2Zm2 0v12h8V2H4Z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
    <circle cx="8" cy="12" fill="currentColor" r="1"/>
  </>,
  'Mobile',
  {
    viewBox: '0 0 16 16',
  },
);

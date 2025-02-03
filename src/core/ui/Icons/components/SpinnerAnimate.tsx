import createSvgIcon from '../createSvgIcon';

export const SpinnerAnimate = createSvgIcon(
  <>
    <circle cx="28" cy="28" fill="none" r="26" stroke="currentColor" strokeOpacity=".1" strokeWidth="4" />
    <path
      d="M46.385 46.385A26 26 0 0 1 4.834 16.196"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="4"
    >
      <animateTransform
        attributeName="transform"
        dur="0.9s"
        from="0 28 28"
        repeatCount="indefinite"
        to="360 28 28"
        type="rotate"
      />
    </path>
  </>,
  'SpinnerAnimate',
  {
    viewBox: '0 0 56 56',
    size: 56,
  },
);

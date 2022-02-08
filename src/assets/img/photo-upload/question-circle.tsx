const QuestionCircleIcon = ({ size = 32, color = "white" }: any) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size + 3} ${size + 3}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1378_1760)">
      <path
        d="M16 30C12.287 30 8.72601 28.525 6.1005 25.8995C3.475 23.274 2 19.713 2 16C2 12.287 3.475 8.72601 6.1005 6.1005C8.72601 3.475 12.287 2 16 2C19.713 2 23.274 3.475 25.8995 6.1005C28.525 8.72601 30 12.287 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0C11.7565 0 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32Z"
        fill={color}
      />
      <path
        d="M10.5102 11.572C10.5075 11.6366 10.518 11.7011 10.5411 11.7614C10.5642 11.8218 10.5994 11.8768 10.6445 11.9231C10.6896 11.9694 10.7438 12.0059 10.8036 12.0305C10.8634 12.0551 10.9276 12.0671 10.9922 12.066H12.6422C12.9182 12.066 13.1382 11.84 13.1742 11.566C13.3542 10.254 14.2542 9.298 15.8582 9.298C17.2302 9.298 18.4862 9.984 18.4862 11.634C18.4862 12.904 17.7382 13.488 16.5562 14.376C15.2102 15.354 14.1442 16.496 14.2202 18.35L14.2262 18.784C14.2283 18.9152 14.2819 19.0403 14.3754 19.1324C14.469 19.2244 14.595 19.276 14.7262 19.276H16.3482C16.4808 19.276 16.608 19.2233 16.7017 19.1296C16.7955 19.0358 16.8482 18.9086 16.8482 18.776V18.566C16.8482 17.13 17.3942 16.712 18.8682 15.594C20.0862 14.668 21.3562 13.64 21.3562 11.482C21.3562 8.46 18.8042 7 16.0102 7C13.4762 7 10.7002 8.18 10.5102 11.572ZM13.6242 23.098C13.6242 24.164 14.4742 24.952 15.6442 24.952C16.8622 24.952 17.7002 24.164 17.7002 23.098C17.7002 21.994 16.8602 21.218 15.6422 21.218C14.4742 21.218 13.6242 21.994 13.6242 23.098Z"
        fill={color}
      />
    </g>
  </svg>
);

export default QuestionCircleIcon;
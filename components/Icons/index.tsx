import Svg, { Path } from "react-native-svg";

export const MenuIcon = () => {
  return (
    <Svg width="26" height="22" viewBox="0 0 26 22" fill="none">
      <Path
        d="M0 2C0 0.895431 0.895431 0 2 0H24C25.1046 0 26 0.895431 26 2C26 3.10457 25.1046 4 24 4H2C0.89543 4 0 3.10457 0 2Z"
        fill="white"
      />
      <Path
        d="M0 11C0 9.89543 0.895431 9 2 9H24C25.1046 9 26 9.89543 26 11C26 12.1046 25.1046 13 24 13H2C0.89543 13 0 12.1046 0 11Z"
        fill="white"
      />
      <Path
        d="M0 20C0 18.8954 0.895431 18 2 18H24C25.1046 18 26 18.8954 26 20C26 21.1046 25.1046 22 24 22H2C0.89543 22 0 21.1046 0 20Z"
        fill="white"
      />
    </Svg>
  );
};

export const PlayIcon = () => {
  return (
    <Svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <Path d="M30 19.275V71.775L71.25 45.525L30 19.275Z" fill="white" />
    </Svg>
  );
};

export const SkipIcon = () => {
  return (
    <Svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.5 22.5V67.5H59.9999V45.0009L22.5 67.5V22.5L59.9999 44.9982V22.5H67.5Z"
        fill="white"
      />
    </Svg>
  );
};

export const PauseIcon = () => {
  return (
    <Svg width="90" height="90" viewBox="0 0 90 90" fill="none">
      <Path
        d="M22.5 71.25H37.5V18.75H22.5V71.25ZM52.5 18.75V71.25H67.5V18.75H52.5Z"
        fill="white"
      />
    </Svg>
  );
};

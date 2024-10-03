
interface AnimatedCircleProps {
  size: number;
  color: string;
  animation: 'pulse' | 'spin' | 'ping' | 'bounce';
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ 
  size, 
  color, 
  animation, 
  left, 
  right, 
  top, 
  bottom 
}) => {
  const animationClasses = {
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    ping: 'animate-ping',
    bounce: 'animate-bounce'
  };

  const style: React.CSSProperties = {
    position: 'absolute',
    left,
    right,
    top,
    bottom
  };

  return (
    <span className={`absolute ${animationClasses[animation]} hidden 2xl:inline-block`} style={style}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={size/2} cy={size/2} r={size/2} fill={color} />
      </svg>
    </span>
  );
};

export default AnimatedCircle;
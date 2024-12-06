import AnimatedList from "./AnimatedList";
import Notification from "./Notification";
import { notifications } from "@/utils/constants";
const LandingAnimation = ({ className = "" }) => {
  return (
    <div
      className={`hidden h-[360px] w-auto overflow-hidden xl:visible xl:flex ${className}`}
      style={{ transform: "rotate(-2deg)" }}
    >
      <AnimatedList delay={1000}>
        {notifications.map((item, idx) => (
          <Notification {...item} index={idx} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

export default LandingAnimation;

import AnimatedList from "./AnimatedList";
import Notification from "./Notification";
import { notifications } from "@/components/ui/landing/notificationConfig";

const LandingAnimation = () => {
  return (
    <div
      className={`hidden h-[360px] -rotate-2 transform-gpu overflow-hidden transition-transform duration-200 xl:visible xl:flex`}
    >
      <AnimatedList delay={1200}>
        {notifications.map((item, idx) => (
          <Notification {...item} index={idx} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

export default LandingAnimation;

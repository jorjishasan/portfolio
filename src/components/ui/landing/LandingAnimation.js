import AnimatedList from "./AnimatedList";
import Notification from "./Notification";
import { notifications } from "@/components/ui/landing/notificationConfig";

const LandingAnimation = () => {
  console.log("animation still going");
  return (
    <div
      className={`flex h-[360px] -rotate-3 transform-gpu overflow-hidden transition-transform duration-200`}
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

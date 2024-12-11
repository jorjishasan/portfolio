import cn from "@/utils/cn";
import playIcon from "@icon/play.svg";
import pauseIcon from "@icon/pause.svg";
import Image from "next/image";
const PlayPauseButton = ({ isPaused, onClick, className }) => {
  return (
    <button
      className={cn(
        "relative flex h-8 w-12 items-center justify-center rounded-[4px] border-[0.4px] border-gray-700/60",
        className,
      )}
      onClick={onClick}
    >
      {isPaused ? (
        <Image width={20} height={20} src={playIcon} alt="pause" />
      ) : (
        <Image width={20} height={20} src={pauseIcon} alt="play" />
      )}
    </button>
  );
};

export default PlayPauseButton;

import Group24 from "./elements/Group24";
import Group25 from "./elements/Group25";
import Rectangle4 from "./elements/Rectangle4";

const EndToEndBgDecor = () => {
  return (
    <div className="absolute inset-0 z-[-1] xl:w-[1920px] xl:inset-auto xl:left-1/2 xl:-translate-x-1/2 xl:h-full xl:top-0">
      <Group24 />
      <Group25 />
      <Rectangle4 />
    </div>
  );
};

export default EndToEndBgDecor;

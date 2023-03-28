import { FC, useEffect, useRef } from "react";
import { AirCondition, ThemeColors } from "../../enums/enums";
import { useThemeColor } from "../../features/theme-color/themeColorSlice";
import { AirConditionsData } from "../air-conditions-data";

export const AirConditions: FC = () => {
  const { themeColor } = useThemeColor();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    if (themeColor === ThemeColors.light) {
      titleRef.current.classList.add('dark-text');
    } else if (titleRef.current.classList.length > 0) {
      titleRef.current.classList.remove('dark-text');
    }
  }, [themeColor]);

  return (
    <div className={`air-conditions ${themeColor}-theme-data-bg`}>
      <div className='air-conditions-title'>
        <p ref={titleRef}>air conditions</p>
      </div>
      <div className='air-conditions-container'>
        <div className='air-conditions-container-left'>
          <AirConditionsData name={AirCondition.real_feel} />
          <AirConditionsData name={AirCondition.chance_of_rain} />
        </div>
        <div className='air-conditions-container-right'>
          <AirConditionsData name={AirCondition.wind} />
          <AirConditionsData name={AirCondition.uv_index} />
        </div>
      </div>
    </div>
  );
}
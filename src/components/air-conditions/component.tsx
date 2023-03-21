import { FC } from "react";
import { AirCondition } from "../../enums/enums";
import { AirConditionsData } from "../air-conditions-data";

export const AirConditions: FC = () => {
  return (
    <div className='air-conditions'>
      <div className='air-conditions-title'>
        <p>air conditions</p>
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
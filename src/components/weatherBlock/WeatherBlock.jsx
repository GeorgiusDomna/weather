import React from "react";
import s from './weatherBlock.module.sass';

const WeatherBlock = ({title, data}) => {
  return (
    <div className={s.block}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.text}>{data ? data : '-'}</div>
    </div>
  );
}
 
export default WeatherBlock;
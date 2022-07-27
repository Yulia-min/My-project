import React from "react";
import times from "lodash/times"
import './Loader.scss'

interface Props {
  count: number
}

export const Loader = ({ count }: Props) => {
  return (
    <>
      {times(count, (index: React.Key) => (
        <div key={index} className="common-block">
            <div className="first-block" />
            <div className="second-block"/>
            <div className="third-block"/>
        </div>
      ))}
    </>
  );
}
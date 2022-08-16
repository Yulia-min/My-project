import React from "react";
import times from "lodash/times"
import './Loader.scss'
import { LoaderType } from "./LoaderType";

export const Loader = ({ count, isLoader, isInfinityLoader }: LoaderType) => {
  return (
    <>
      {
          isLoader && times(count, (index: React.Key) => (
            <div key={index} className="common-block">
                <div className="first-block" />
                <div className="second-block"/>
                <div className="third-block"/>
            </div>
          ))
        }
      {
        isInfinityLoader && 
          <div className="dots-wrapper">
            <div className="dots" />
            <div className="dots" />
            <div className="dots" />
          </div>
      }
    </>
  );
}
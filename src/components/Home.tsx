import React from 'react';
import adv from "./videos/adv.mp4";

function Main() {
  return (
    <video src={adv} autoPlay loop muted></video>
  );
}

export default Main;
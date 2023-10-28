import React, { useState } from "react";

const TypingBox = () => {
  const [time, setTime] = useState(15);
  let displaytext = "Lorem ipsum  vitae.Deserunt cum eum sint dolore vitae accusantium distinctio voluptatibus veniam beatae, necessitatibus animi.Repellendus sapiente dignissimos veniam cum soluta! Vel eveniet aliquid id neque distinctio numquam dolores velit modi fuga, alias itaque.Minima reiciendis dignissimos accusamus ducimus laudantium.Sunt repellendus dolor cumque maiores similique maxime, consequatur fuga labore nihil et repudiandae molestiae quidem sed provident ab ullam?Odit harum architecto illo dolores animi placeat, iure ipsum quibusdam porro laboriosam deleniti odio?Illum, quas.";
  let keychar = 0
  return (
    <>
      <div className="row-1">
        <div>{time} </div>
        <div className="timebtn">
          <button onClick={() => setTime(15)}>15s</button>
          <button onClick={() => setTime(30)}>30s</button>
          <button onClick={() => setTime(60)}>60s</button>
        </div>
      </div>
      {
        displaytext.split("").map((char) => (<span key={'char'+(keychar++)}>{char}</span>))
      }
    </>
  );
};

export default TypingBox;

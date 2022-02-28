import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";

import {Num} from './CounterElements'

const Counter = ({ ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
            <VisibilitySensor
                active={!viewPortEntered}
                onChange={(isVisible) => {
                    if (isVisible) {
                        setViewPortEntered(true);
                    }
                }}
                delayedCall
            >
                <Num ref={countUpRef} />
            </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};



export default Counter;
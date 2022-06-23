import React, { useContext } from "react";
import { months } from "../../constants/index";
import { calenderContext } from "../../Context/calender.context";
import { Flexbox } from "../../elements/Flexbox";
import * as H from "./style";

interface actionTypes {
  type: string;
  data?: number | string;
}

interface CalenderLayoutProps {
  handleActionProceed?: actionTypes;
  handleActionBack?: actionTypes;
}

export const CalenderLayout: React.FC<CalenderLayoutProps> = ({
  children,
  handleActionProceed,
  handleActionBack
}) => {
  const contextTesting = useContext(calenderContext);
  // @ts-ignore
  const [state, dispatch] = contextTesting;
  return (
    <H.Container>
      <Flexbox className="card-top" flexRow>
        <h3 style={{fontSize: 20}} color="white">
          Schedule - {months[state.month - 1]} {state.year}
        </h3>
        <Flexbox flexRow className="card-top-inner">
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionBack)}
          >
            Prev
          </Flexbox>
          <Flexbox
            justifyCenter
            alignCenter
            className="card-top-inner-item"
            onClick={() => dispatch(handleActionProceed)}
          >
            Next
          </Flexbox>
        </Flexbox>
      </Flexbox>
      {children}
    </H.Container>
  );
};

import React from "react";
import ReactDOM from "react-dom";

export const Button = ({children, ...domProps}) => (
  <div {...domProps} className="pointer ma2 pa2 bg-light-gray tc shadow-4 no-select w2 h2">
    {children}
  </div>
)

export default (dispatch, actions, model) => (
  <>
    <Button onClick={()=> dispatch(actions.decrement())}>
      -
    </Button>
    <div className="pa2 ma2 w2 h2 tc">
      {model.count}
    </div>
    <Button onClick={() => dispatch(actions.increment())}>
      +
    </Button>
  </>
)

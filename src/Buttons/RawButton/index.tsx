import React from "react";
import styled from 'styled-components'

export interface RawButtonInterface {
  primary: boolean;
}

const Button: React.SFC<RawButtonInterface> = props => <button {...props}>{props.children}</button>;

const StyledButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export const RawButton = (props: RawButtonInterface) => {
  return <StyledButton {...props}>Primary</StyledButton>
};

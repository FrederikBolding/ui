import { padding } from 'polished';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import styled from '_styled-components';
import { Typography } from 'atoms';
import Theme, { borderRadius, scale, transitionDuration } from 'Theme';

export const Input = styled(Typography)`
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  font-size: ${scale(0)};
  font-weight: bold;
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration};

  :focus {
    border-color: ${props => props.theme.primary};
    outline: none;
  }
` as StyledComponentClass<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  Theme
>;

Input.defaultProps = { as: 'input' };

export default Input;

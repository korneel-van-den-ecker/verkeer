import React from 'react';
import styled from 'styled-components';
import MUIIconButton from '@material-ui/core/IconButton';


const SvgIconButton = styled(
  ({
    customColor = 'grey600',
    hoverColor,
    disabled = false,
    noBgColor = false,
    children,
    width = '40px', // todo why does the default not work?
    height = '40px',
    ...props
  }) => (
    <MUIIconButton color="primary" disabled={disabled} {...props}>
      {children}
    </MUIIconButton>
  )
)`
display: block;
width: ${props => props.width || '40px'}
height: ${props => props.height || '40px'}
margin: 0 auto;
background-color: transparent;
border-radius: 50%;
padding: 6px;

&:hover {
  cursor: pointer;
  background-color: ${props =>
    props.noBgColor ? 'transparent' : props.theme.icons.background};

  > span > svg {
    > g {
      fill: ${props =>
        props.hoverColor
          ? props.theme.colors[props.hoverColor]
          : props.theme.icons.hover};
    }
  }
}

> span > svg {
  > g {
    fill: ${props =>
      props.disabled
        ? props.theme.icons.disabled
        : props.theme.colors[props.customColor || 'grey600']}
}
`;

export default SvgIconButton;

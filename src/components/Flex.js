import styled from 'react-emotion'
import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  height,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  background,
  borderTop,
  borderRight,
  borderLeft,
  borderBottom,
  style,
  space,
  width,
  position,
  order,
  zIndex
} from 'styled-system'

const overflow = style({
  prop: 'overflow'
})

const Flex = styled('div')`
  display: flex;
  ${overflow}
  ${order}
  ${background}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderBottom}
  ${space}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${height}
  ${width}
  ${position}
  ${zIndex}
`

export default Flex

import styled from '@emotion/styled'
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

const overflowX = style({
  prop: 'overflowX'
})

const Flex = styled('div')`
  display: flex;
  ${overflowX}
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

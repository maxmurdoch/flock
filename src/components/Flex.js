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
  background,
  borderTop,
  borderRight,
  borderLeft,
  borderBottom,
  style,
  space,
} from 'styled-system'

const overflow = style({
  prop: 'overflow',
})

const Flex = styled('div')`
  display: flex;
  ${overflow}
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
  ${background}
`

export default Flex

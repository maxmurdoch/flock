import styled from 'react-emotion'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  border,
  borderRight,
  borderLeft,
  borderTop,
  borderBottom,
  order,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifySelf,
  maxWidth,
  minHeight,
  position,
  space,
  width,
  height,
  zIndex
} from 'styled-system'

const Box = styled('div')`
${alignContent}
${alignItems}
${alignSelf}
${background}
${border}
${borderBottom}
${borderLeft}
${borderRight}
${borderTop}
${color}
${display}
${flex}
${flexBasis}
${flexDirection}
${flexWrap}
${height}
${justifyContent}
${justifySelf}
${maxWidth}
${minHeight}
${order}
${position}
${space}
${width}
${zIndex}
`

export default Box

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
  zIndex,
} from 'styled-system'

const Box = styled('div')`
${height}
${maxWidth}
${border}
${borderRight}
${borderLeft}
${borderTop}
${borderBottom}
${position}
${minHeight}
${display}
${alignItems}
${alignContent}
${justifyContent}
${flexWrap}
${flexBasis}
${flexDirection}
${flex}
${justifySelf}
${alignSelf}
${space}
${width}
${color}
${background}
${zIndex}
`

export default Box

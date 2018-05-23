import React from 'react'
import R from 'ramda'
import { css } from 'emotion'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import backArrow from '../images/icons/back-arrow.svg'

const mapWithIndex = R.addIndex(R.map)

const Testimonial = ({ children, testimonials }) => (
  <Flex justifyContent="center">
    <SiteContainer>
      <Flex flexWrap={true}>
        <CarouselProvider
          className={styles.carouselProvider}
          naturalSlideHeight={310}
          naturalSlideWidth={1180}
          totalSlides={R.length(testimonials)}
        >
          <Slider className={styles.slider}>
            {mapWithIndex(({ quote, author, image }, index) => {
              return (
                <Slide
                  innerClassName={styles.slide}
                  index={index}
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <Flex
                    position="relative"
                    zIndex="3"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box width="40em">
                      <BodyText
                        textShadow="0 1px rgba(0, 0, 0, 0.2)"
                        textAlign="center"
                        color="white"
                        mb={2}
                      >
                        {quote}
                      </BodyText>
                      <SmallText
                        fontWeight="700"
                        textAlign="center"
                        color="white"
                      >
                        — {author}
                      </SmallText>
                    </Box>
                  </Flex>
                </Slide>
              )
            }, testimonials)}
          </Slider>

          {R.gt(R.length(testimonials), 1) ? (
            <div>
              <div className={styles.dotGroup}>
                {mapWithIndex(
                  (_, index) => <Dot slide={index} className={styles.dot} />,
                  testimonials
                )}
              </div>
              <ButtonBack className={styles.buttonBack}>
                <img className={styles.backArrow} src={backArrow} />
              </ButtonBack>
              <ButtonNext className={styles.buttonNext}>
                <img className={styles.nextArrow} src={backArrow} />
              </ButtonNext>
            </div>
          ) : null}
        </CarouselProvider>
      </Flex>
    </SiteContainer>
  </Flex>
)

export default Testimonial

const styles = {
  dotGroup: css({
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  dot: css({
    background: 'transparent',
    width: 12,
    height: 12,
    margin: '0 8px',
    border: '2px solid #fff',
    padding: 0,
    borderRadius: '50%',
    '&:disabled': { background: 'white' },
  }),
  carouselProvider: css({ width: '100%', position: 'relative' }),
  slider: css({
    width: '100%',
  }),
  slide: css({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  }),
  buttonBack: css({
    background: 'none',
    border: 'none',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 40,
    padding: 0,
    '&:disabled': {
      opacity: 0.6,
    },
  }),
  buttonNext: css({
    background: 'none',
    border: 'none',
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 40,
    padding: 0,
    '&:disabled': {
      opacity: 0.6,
    },
  }),
  nextArrow: css({
    width: '2rem',
    height: '2rem',
    marginBottom: 0,
    transform: 'rotate(180deg)',
  }),
  backArrow: css({
    width: '2rem',
    height: '2rem',
    marginBottom: 0,
  }),
}

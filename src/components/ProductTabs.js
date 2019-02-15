import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

import H2 from './H2'
import BodyText from './BodyText'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'

class TabSection extends Component {
  static Tab = () => {}

  renderTabs = tabs =>
    tabs.map(({title}) => (
      <Tab
        className={css(styles.tabStyle)}
        selectedClassName={css(styles.selectedTabStyle)}
        key={title}
      >
        {title}
      </Tab>
    ))

  renderTabPanel = tabs =>
    tabs.map(({title, children}) => <TabPanel key={title}>{children}</TabPanel>)

  render() {
    const {
      renderTabs,
      renderTabPanel,
      props: {title, description, children}
    } = this
    const {tabListStyle, selectedTabStyle, selectedTabPanelStyle} = styles
    const tabs = React.Children.toArray(children).map(tab => tab.props)

    return (
      <React.Fragment>
        <Flex justifyContent="center">
          <SiteContainer>
            <Flex flexWrap={true} flexDirection="column">
              <Box width={['100%', '50%']} mb={50}>
                <ShowIf predicate={R.not(R.isEmpty(title))}>
                  <H2 markdown={true}>{title}</H2>
                </ShowIf>

                <ShowIf predicate={R.not(R.isEmpty(description))}>
                  <BodyText>{description}</BodyText>
                </ShowIf>
              </Box>
            </Flex>
          </SiteContainer>
        </Flex>

        <div className={css({background: '#363636'})}>
          <Tabs selectedTabPanelClassName={css(selectedTabPanelStyle)}>
            <Flex
              justifyContent="center"
              className={css({backgroundColor: 'white'})}
            >
              <SiteContainer
                edgeToEdge
                className={css({
                  overflowX: 'scroll',
                  '-ms-overflow-style': '-ms-autohiding-scrollbar'
                })}
              >
                <TabList className={css(tabListStyle)}>
                  {renderTabs(tabs)}
                </TabList>
              </SiteContainer>
            </Flex>

            <Flex justifyContent="center">
              <SiteContainer edgeToEdge>{renderTabPanel(tabs)}</SiteContainer>
            </Flex>
          </Tabs>
        </div>
      </React.Fragment>
    )
  }
}

export default TabSection

TabSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
}

const styles = {
  tabListStyle: {
    marginBottom: 0,
    marginLeft: 20,
    width: '100%',
    display: 'flex',
    overflowX: 'scroll',
    '-ms-overflow-style': '-ms-autohiding-scrollbar'  
  },
  tabStyle: {
    display: 'inline-block',
    cursor: 'pointer',
    listStyle: 'none',
    fontWeight: 'bold',
    fontFamily: 'Chivo',
    position: 'relative',
    padding: '10px 30px',
    marginBottom: 0,
    textAlign: 'center',
    width: 250,
    marginRight: 15,
    borderTop: '7px solid #F7F7F4',
    backgroundColor: '#F7F7F4'
  },
  selectedTabStyle: {
    boxSizing: 'border-box',
    '-moz-box-sizing': 'border-box',
    '-webkit-box-sizing': 'border-box',
    backgroundColor: '#363636',
    color: 'white',
    borderTop: '7px solid #FFE001'
  },
  selectedTabPanelStyle: {
    display: 'block',
    background: '#363636',
    paddingTop: 30
  }
}

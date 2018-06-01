import React, { Component } from 'react'
import { withState } from 'recompose'
import Flex from './Flex'
import Box from './Box'

export default withState('active', 'toggleActive', null)

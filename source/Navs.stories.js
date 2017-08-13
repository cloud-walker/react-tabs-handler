import React from 'react'
import {storiesOf} from '@storybook/react'
import styled from 'styled-components'

import Component from './index'

const ifActive = (a, b) => ({isActive}) => (isActive ? a : b)

const Tab = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${ifActive('lightblue', 'inherit')};
`

const Panel = styled.div`display: ${ifActive('block', 'none')};`

storiesOf(Component.displayName, module).add('basic', () =>
  <Component>
    {({getTabProps, getPanelProps}) =>
      <div>
        <div>
          <Tab {...getTabProps()}>🍕</Tab>
          <Tab {...getTabProps()}>🍣</Tab>
          <Tab {...getTabProps()}>🌮</Tab>
        </div>

        <div>
          <Panel {...getPanelProps()}>Pizzaaaaaaaaaaaaaaaaaa</Panel>
          <Panel {...getPanelProps()}>Sushiii</Panel>
          <Panel {...getPanelProps()}>Tacos!</Panel>
        </div>
      </div>}
  </Component>,
)

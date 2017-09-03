import React from 'react'
import {storiesOf} from '@storybook/react'
import styled, {css} from 'styled-components'

import Component from './index'

const ifActive = (a, b) => ({isActive}) => (isActive ? a : b)

const Tab = styled.button`
  cursor: pointer;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${ifActive('lightblue', 'inherit')};
`
const Panel = styled.div`display: ${ifActive('block', 'none')};`

storiesOf(Component.displayName, module)
  .add('basic', () => {
    return (
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
      </Component>
    )
  })
  .add('atom settings', () => {
    const color_bg = '#282c34'
    const color_bg_hover = '#31363f'
    const color_bg_active = '#3a3f4b'
    const color_text = '#9da5b4'
    const color_text_hover = '#d7dae0'
    const color_text_active = 'white'
    const font_family = `'BlinkMacSystemFont', 'Lucida Grande', 'Segoe UI', Ubuntu, Cantarell, sans-serif`
    const Context = styled.div`
      background-color: ${color_bg};
      color: ${color_text};
      display: flex;
      width: 50em;
      margin: 0 auto;
      font-family: ${font_family};
    `
    const TabList = styled.nav`
      display: flex;
      flex-direction: column;
      min-width: 15em;
      border-right: 1px solid;
      border-image: linear-gradient(#282c34 10px, #181a1f 200px) 0 1 0 0 stretch;
    `
    const Tab = styled.div`
      padding: .75rem 1rem;
      cursor: pointer;
      ${ifActive(
        css`
          background-color: ${color_bg_active};
          color: ${color_text_active};
        `,
        css`
          &:hover {
            background-color: ${color_bg_hover};
            color: ${color_text_hover};
          }
        `,
      )};
    `
    const Panel = styled.div`
      flex-grow: 1;
      height: 100vh;
      padding: 1rem;
      display: ${ifActive('block', 'none')};
    `
    const Button = styled.button`
      border: 1px solid #181a1f;
      border-radius: 3px;
      padding: .5em .75em;
      cursor: pointer;
      color: #9da5b4;
      outline: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background-image: linear-gradient(${color_bg_active}, #353b45);

      &:hover {
        color: white;
      }
    `

    return (
      <Component>
        {({getTabProps, getPanelProps}) =>
          <Context>
            <TabList>
              <Tab {...getTabProps()}>HTML</Tab>
              <Tab {...getTabProps()}>CSS</Tab>
              <Tab {...getTabProps()}>JS</Tab>
              <Button style={{alignSelf: 'center'}}>Open config folder</Button>
            </TabList>

            <Panel {...getPanelProps()}>
              <h1>HTML</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              harum, illum molestias velit nobis commodi maiores, fugiat
              aliquam. Reiciendis, quod, cupiditate. Deleniti, est officiis sit
              itaque. Ex voluptates similique tempora.
            </Panel>
            <Panel {...getPanelProps()}>
              <h1>CSS</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              harum, illum molestias velit nobis commodi maiores, fugiat
              aliquam. Reiciendis, quod, cupiditate. Deleniti, est officiis sit
              itaque. Ex voluptates similique tempora.
            </Panel>
            <Panel {...getPanelProps()}>
              <h1>JavaScript</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              doloribus voluptatibus, hic. Velit quos illum optio dolorum
              reprehenderit ullam, corrupti, provident officia repellendus ad
              ipsam ratione, quisquam expedita sint ab.
            </Panel>
          </Context>}
      </Component>
    )
  })
  .add('inception', () => {
    return (
      <Component>
        {({getTabProps, getPanelProps}) => {
          const pizzaProps = getTabProps()
          const sushiProps = getTabProps()

          return (
            <div>
              <div>
                <Tab {...pizzaProps}>🍕</Tab>
                <Tab {...sushiProps}>🍣</Tab>
                <Tab {...getTabProps()}>🌮</Tab>
              </div>

              <div>
                <Panel {...getPanelProps()}>
                  <div>Pizzaaaaaaaaaaaaaaaaaa</div>

                  <Component>
                    {({getTabProps, getPanelProps}) => {
                      return (
                        <div>
                          <div>
                            <Tab {...getTabProps()}>🍕</Tab>
                            <Tab {...getTabProps()}>🍣</Tab>
                            <Tab {...getTabProps()}>🌮</Tab>
                          </div>
                          <div>
                            <Panel {...getPanelProps()}>
                              Pizzaaaaaaaaaaaaaaaaaa
                            </Panel>
                            <Panel {...getPanelProps()}>Sushiii</Panel>
                            <Panel {...getPanelProps()}>
                              <div>Tacos!</div>
                              <Tab {...sushiProps}>Return to sushi..</Tab>
                            </Panel>
                          </div>
                        </div>
                      )
                    }}
                  </Component>
                </Panel>
                <Panel {...getPanelProps()}>Sushiii</Panel>
                <Panel {...getPanelProps()}>Tacos!</Panel>
              </div>
            </div>
          )
        }}
      </Component>
    )
  })

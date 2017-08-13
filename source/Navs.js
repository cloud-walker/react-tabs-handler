import React from 'react'
import PropTypes from 'prop-types'

const Component = class extends React.Component {
  static displayName = 'Navs'
  static propTypes = {
    children: PropTypes.func.isRequired,
  }
  tabs = -1
  panels = -1

  get isGetterPropsUseValid() {
    return this.tabs == this.panels && this.tabs + this.panels >= 2
  }

  constructor(...args) {
    super(...args)
    this.handleChangeTab = this.handleChangeTab.bind(this)
    this.getTabProps = this.getTabProps.bind(this)
    this.getPanelProps = this.getPanelProps.bind(this)

    this.state = {
      activeIndex: this.props.index || 0,
    }
  }

  componentWillUpdate() {
    this.tabs = this.panels = -1
  }

  handleChangeTab(activeIndex) {
    return () => this.setState({activeIndex})
  }

  getTabProps(props) {
    this.tabs++
    const index = this.tabs

    return {
      ...props,
      onClick: this.handleChangeTab(index),
      isActive: this.state.activeIndex == index,
    }
  }

  getPanelProps(props) {
    this.panels++
    const index = this.panels

    return {
      ...props,
      isActive: this.state.activeIndex == index,
    }
  }

  render() {
    const {getTabProps, getPanelProps} = this

    const result = this.props.children({getTabProps, getPanelProps})

    if (!this.isGetterPropsUseValid) {
      console.warn(`
        Tabs and/or panels are not sufficient or
        not the same number!
        Please use the getterProps provided to add
        at least 2 panels and 2 tabs.
        `)
    }

    return result
  }
}

export default Component

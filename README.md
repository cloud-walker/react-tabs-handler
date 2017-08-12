# react-tabs
Presentation-less component to build robust navs / tabs

## The why
The component take inspiration from [downshift](downshift) (an awesome [Kent C. Dodds](kent)'s component for dropdown / select / combobox, etc.) and try to accomplish the same thing for the tabs problem presented in the ["Compound Components"](compound-components-talk) talk from [Ryan Florence](ryan), using the "getter props" pattern instead.

Even if the frontend developer experience is evolved during the last years, is still difficult to find a good component flexible still robust enough.

## Installation
The component has not been released, yet.

## Usage
```javascript
import React from 'react'
import Navs from 'react-navs'

const Component = () => {
  return (
    <div>
      <h1>Awesome application</h1>
      <Navs>
        {({getTabProps, getPanelProps}) => {
          const pizzaPanelProps = getPanelProps()
          const sushiPanelProps = getPanelProps()
          const tacosPanelProps = getPanelProps()

          return(
            <div>
              <div className="tab" {...getTabProps()}>pizza</div>
              <div className="tab" {...getTabProps()}>sushi</div>
              <div className="tab" {...getTabProps()}>tacos</div>

              <div
                className="panel"
                {...pizzaPanelProps}
                style={{
                  display: pizzaPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Nothing better than pizza!
              </div>
              <div
                className="panel"
                {...sushiPanelProps}
                style={{
                  display: sushiPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Sushiiii!
              </div>
              <div
                className="panel"
                {...tacosPanelProps}
                style={{
                  display: tacosPanelProps.isActive ? 'block' : 'none',
                }}
              >
                Tacos are good but they can nothing versus Pizza.
              </div>
            </div>
          )
        }}
      </Navs>
    </div>
  )
}
```

[downshift]: https://github.com/paypal/downshift
[kent]: https://github.com/kentcdodds
[ryan]: https://github.com/ryanflorence
[compound-components-talk]: https://www.youtube.com/watch?v=hEGg-3pIHlE

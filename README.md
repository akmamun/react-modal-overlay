# react-modal-overlay

Accessible simple modal overlay component for React JS

[![NPM](https://img.shields.io/npm/v/react-modal-overlay.svg)](https://www.npmjs.com/package/react-modal-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/akmamun/react-modal-overlay.svg?branch=master)](https://travis-ci.org/akmamun/react-modal-overlay)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com):

```bash
npm install react-modal-overlay
yarn add react-modal-overlay
```

## Usage

- Using Hooks

```jsx
import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Click Modal!</button>
      <Modal show={isOpen} closeModal={() => setIsOpen(false)}>
        <h4> here is hook modal data </h4>
      </Modal>
    </div>
  )
}
```

- Class Based Component

```jsx
import React, { Component } from 'react'
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'

export default class ExampleModal extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Click Modal!</button>
        <Modal show={this.state.showModal} closeModal={this.toggleModal}>
          <h4> here is modal data </h4>
        </Modal>
      </div>
    )
  }
}
```

## Demos

- [Hooks example](https://codesandbox.io/s/react-modal-overlay-wybon?file=/src/Hooks.js)

- [Class based Component example](https://codesandbox.io/s/react-modal-overlay-wybon)

## License

MIT © [akmamun](https://github.com/akmamun)

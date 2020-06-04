# react-modal-overlay

## Accessible modal overlay component for React JS

[![NPM](https://img.shields.io/npm/v/react-modal-overlay.svg)](https://www.npmjs.com/package/react-modal-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-overlay
```

## Usage

```jsx
export default class ExampleModal extends Component {

  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Click Modal!</button>
        <Modal show={this.state.showModal} closeModal={this.toggleModal}>
          <h4> here is modal data </h4>
        </Modal>
      </div>
    );
  }
}
```

## License

MIT © [akmamun](https://github.com/akmamun)

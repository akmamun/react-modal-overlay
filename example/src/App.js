
import React, { Component } from "react";
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
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
export default App;
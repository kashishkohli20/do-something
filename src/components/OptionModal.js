import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleSelectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={300}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleSelectedOption}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
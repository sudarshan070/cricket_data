import { Modal } from "react-bootstrap";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Bip from "./ringtone/sachin.mp3";

export default function ModalCard(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Who is the best
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "2.5rem" }}>👑 {props.playerdata.NAME} </p>
          {props.playerdata.NAME === "Sachin Tendulkar" ? (
            <ReactAudioPlayer src={Bip} autoPlay={true} loop={true} />
          ) : (
            ""
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

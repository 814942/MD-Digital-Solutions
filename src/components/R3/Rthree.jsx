import React from "react";
import ReactPlayer from "react-player";
import { useModal } from "../../hooks";
import Modal from "./Modal";
import "./styles.css";

const Rthree = () => {
  const [open, openModal, closeModal] = useModal(false);

  return (
    <section className="modal-center">
      <div className="modal-text">
        <p>
          El gabinete de Seguridad de Israel, encabezado por el primer ministro
          Benjamín Netanyahu, aprueba alto al fuego. Medios de comunicación
          locales dicen que en tres horas entraría en vigor la medida en el
          principio de un mutuo fin de los bombardeos. Uno de los temas que
          preocupa es si las partes aprovechan estas horas para realizar ataques
          importantes.
        </p>
        <button className="modal-btn btn" onClick={openModal}>
          Fullscreen
        </button>
      </div>
      <div className="modal-video">
        <ReactPlayer
          className="modal-video-player"
          url="https://www.youtube.com/watch?v=IgJ-ymSpw3M"
          autopictureinpicture
          width="100%"
          height="calc(100vh - 100px)"
          controls
        />
      </div>
      <Modal isOpen={open} closeModal={closeModal}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=IgJ-ymSpw3M"
          width="100%"
          height="calc(100vh - 100px)"
          controls
        />
      </Modal>
    </section>
  );
};

export default Rthree;

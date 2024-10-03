'use client'
import Modal from "@/src/Components/Modal";
import Publicacao from "@/src/Pages/Publicacao";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      <button onClick={toggleModal}>Abrir Publicação</button>

      <Modal show={showModal} onClose={toggleModal}>
        <Publicacao />
      </Modal>
    </div>
  );
}

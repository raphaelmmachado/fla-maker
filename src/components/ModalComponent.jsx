import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Como usar:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>Escolha sua formação.</li>
            <li>Escolha seu time.</li>
            <li>Selecione seus jogadores desejados.</li>
            <li>Clique no icone da camera para copiar a imagem do campo.</li>
            <li>Escolha sua rede social para compartilhar e cole a imagem.</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export { ModalComponent };

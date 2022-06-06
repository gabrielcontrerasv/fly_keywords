import React from "react";
import { Form, Button } from "react-bootstrap";

const ParticipantsForm = () => {
  return (
    <>
      <Form style={{ color: "white", fontWeight: "bold", textAlign: "right" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Digite su Usuario</Form.Label>
          <Form.Control type="text" />
          <Form.Label>Digite su password</Form.Label>
          <Form.Control type="email" />
          <Form.Label className="">
            Porfavor asegurese de que el documento a cargar tiene la estructura
            requerida
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>FUERZA</Form.Label>
          <Form.Select>
            <option>Seleccione su Fuerza</option>
            <option value="1">EJERCITO NACIONAL</option>
            <option value="2">FUERZA AEREA COLOMBIANA</option>
            <option value="3">ARMADA NACIONAL</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          <Button className="col-md-4 col-sm-6" variant="primary" type="submit">
            Registrar
          </Button>

          <Button className="col-md-4 col-sm-6" variant="success" type="submit">
            Descargar Formato
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default ParticipantsForm;

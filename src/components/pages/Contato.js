// import savings from '../../img/savings.svg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contato() {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="form.ControlInputText">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.ControlInput">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@exemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.ControlTextarea">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" type="submit">
        Enviar
        </Button>
        </Form>
    )
}

export default Contato
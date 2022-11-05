import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
        email: email,
        senha: senha,
        };

        api.post("/api/usuarios", data).then(() => {
        toast.success("Usuário cadastrado com sucesso!");
        setLoading(false);
        })
    }
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" value={senha}
              onChange={(e) => setSenha(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Enviar
        </Button>
        {!loading ? (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Criar conta
          </Button>
        ) : (
          <Button
            disabled
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Criando...
          </Button>
        )}
      </Form>

    )
}

export default Cadastro
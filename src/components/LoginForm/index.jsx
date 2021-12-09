import Button from './../Button';
import Input from './../Input';
import {Container,Form,Title} from './styles';
const LoginForm = ()=>{
  return (
    <Container>
      <Title>Entrar com uma conta existente</Title>
      <Form>
        <Input type="text" placeholder='Email' />
        <Input type="text" placeholder='Senha'/>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );

};
export default LoginForm;
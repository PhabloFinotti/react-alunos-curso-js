import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';

export default function Page404() {
  history.push('/');
  return (
    <Container>
      <h1>Página não existe</h1>
    </Container>
  );
}

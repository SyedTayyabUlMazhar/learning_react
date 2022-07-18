import { Counter } from './Components';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-width: 1px; border-style: solid; border-color: red;
`;

function App() {
  return (
    <Container>
      <Counter initialCount={0}  />
    </Container>
  );
}

export default App;

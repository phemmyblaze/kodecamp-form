import Form from "./form";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container className="p-3 d-flex flex-wrap">
        <Form />
      </Container>
    </div>
  );
}

export default App;

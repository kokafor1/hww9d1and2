import Navigation from "./Navigation";
import TaskForm from "./TaskForm";
import Container from "react-bootstrap/Container";


export default function App() {
  return (
    <>
      <Navigation/>
      <Container>
      <TaskForm/>
      </Container>
    </>
  )
}
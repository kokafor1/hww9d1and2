import { useState } from "react";
import { Task } from "./types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

type TaskCardProps = {
    task: Task;
}

export default function TaskCard({task}: TaskCardProps) {
   const [completedTask, setCompletedTask] = useState<boolean>(task.completed);


   const makeComplete = () => {
    task.completed = !completedTask
    setCompletedTask(!completedTask);
   } 

   return (
    <>
    <Col xs={12} md={6} lg={4}>
    <Card text="white" className="my-3">
      <Card.Header>My Task</Card.Header>
      <Card.Header key={task.dueDate}>Due Date: {task.dueDate}</Card.Header>
      <Card.Body>
        <Card.Title key={task.title}>{task.title}</Card.Title>
        <Card.Text key={task.description}>{task.description}</Card.Text>
        <Button variant={task.completed ? 'danger' : 'success'} onClick={() => makeComplete}>Mark As {task.completed.toString() ? 'Incomplete' : 'Done'}</Button>
      </Card.Body>
    </Card>
    </Col>
    </>
   )
}
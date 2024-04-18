import { useState } from "react";
import { Task } from "./types";
import Todo from "./Todo";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function TaskForm() {
    const [taskList, setTasks] = useState<Task[]>([]);

    const addTask = (e: any) => {
        e.preventDefault();

        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            let newTask: Task = {
                title: e.target[0].value,
                description: e.target[2].value,
                dueDate: e.target[1].value.toString(),
                completed: false,
            };
            taskList.push(newTask);
            setTasks(taskList.slice(0));
        } else {
            console.warn(`Unable to create task: Empty input field`)
        }
    };
    

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={addTask}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Task Name</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Task Nmae"
                                    required
                                    />
                                    <Form.Label>Task Description</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="description"
                                    placeholder="Enter Task Description"
                                    required
                                    />
                                    <Form.Label>Due Date</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="dueDate"
                                    placeholder="Enter Task Due Date"
                                    />
                                </Form.Group>
                                <Button type="submit" className="mb-3">Add To-Do</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Todo tasks={taskList}/>
        </>
    )
}
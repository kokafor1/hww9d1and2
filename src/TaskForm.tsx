import React, { useState } from "react";
import { Task } from "./types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function TaskForm() {
    const [taskList, setTasks] = useState<Task[]>([]);

    const addTask = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const title = formData.get("name") as string;
        const description = formData.get("description") as string;
        const dueDate = formData.get("dueDate") as string;

        if (title && description && dueDate) {
            const newTask: Task = {
                title: title,
                description: description,
                dueDate: dueDate,
                completed: false,
            };
            setTasks([...taskList, newTask]);
        } else {
            console.warn(`Unable to create task: Empty input field`);
        }
    };

    const toggleTaskCompletion = (index: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
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
                                        placeholder="Enter Task Name"
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
                                        type="date"
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
            {taskList.length > 0 && (
                <div>
                    <h2>Tasks:</h2>
                    {taskList.map((task, index) => (
                        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '25px'}}>
                            <p><strong>Title:</strong> {task.title}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Due Date:</strong> {task.dueDate}</p>
                            <Button
                                onClick={() => toggleTaskCompletion(index)}
                                variant={task.completed ? 'success' : 'secondary'}
                            >
                                {task.completed ? 'Completed' : 'Incomplete'}
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}


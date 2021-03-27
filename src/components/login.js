import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class login extends Component {
    state = {
        isOpen: false,
    };

    openModal = () => this.setState({ isOpen: true });

    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <a href="#" onClick={this.openModal} alt="" className="nav-links">
                    Login
                </a>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Enter the UserName" />
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Enter the Password" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={this.closeModal}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default login;

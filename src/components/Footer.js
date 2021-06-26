import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copyright &copy; Malicious Checker
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Footer


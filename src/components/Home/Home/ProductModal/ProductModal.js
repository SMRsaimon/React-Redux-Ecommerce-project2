import React from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";


const ProductModal = (props) => {
    console.log(props);
    const { img, name, star, price, stock } = props.productinfo;
    return (
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title" id="exampleModalToggleLabel">{name}</h5> */}
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <Modal.Body className="show-grid">
                                <Container>
                                    <Row>
                                        <Col xs={12} md={8} className="d-flex justify-content-center">
                                            <img src={img} alt="" />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <h5 class="modal-title" id="exampleModalToggleLabel">{name}</h5>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={6} md={4}>
                                            <p className="m-3">Ratings:
                                                {star}
                                                <FontAwesomeIcon icon={faStar} />
                                            </p>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <h4 className="m-3">Stock:{stock}</h4>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <h1>${price}</h1>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-outline-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
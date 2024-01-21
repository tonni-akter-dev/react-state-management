import React, { useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsStore, getProductById } from "./store/products";

const UpdateProduct = () => {
  const img = useRef("");
  const name = useRef("");
  const price = useRef("");

  const { id } = useParams();
  const productToEdit = useProductsStore(getProductById(id));
  const updateAPICall = useProductsStore((state) => state.updatProductAPI);
  const navigate = useNavigate();

  useEffect(() => {
    if (productToEdit) {
      name.current.value = productToEdit.name;
      price.current.value = productToEdit.price;
      img.current.value = productToEdit.img;
    }
  }, []);

  const handleUpdate = async () => {
    let payload = {
      name: name.current.value,
      img: img.current.value,
      price: Number(price.current.value),
      id: Number(id),
    };
    await updateAPICall(payload);
    navigate("/");
  };

  return (
    <div>
      <Container className="mt-5">
        <Form onSubmit={handleUpdate}>
          <h2>Edit Product</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product image</Form.Label>
            <Form.Control
              type="text"
              ref={img}
              placeholder="Enter product image"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="text"
              ref={name}
              placeholder="Enter product name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" ref={price} placeholder="price" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateProduct;

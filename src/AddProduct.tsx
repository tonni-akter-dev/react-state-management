import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useProductsStore } from "./store/products";

const AddProduct = () => {
  const img = useRef("");
  const name = useRef("");
  const price = useRef("");
  const addProductApiCall = useProductsStore((state) => state.addProductAPI);
  
  const handleAddProduct = async () => {
    const payload = {
      name: name.current.value,
      price: price.current.value,
      img: img.current.value,
    };
    await addProductApiCall(payload);
  };

  return (
    <Container className="mt-5">
      <Form>
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

        <Button variant="primary" onClick={handleAddProduct} type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;

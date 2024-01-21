/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useProductsStore } from "./store/products";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";

const GetProducts = () => {
  const data = useProductsStore((state: any) => state.productData);
  console.log(data);

  const getProduct = useProductsStore((state: any) => state.getProductAPI);
  const callGetAPI = useProductsStore((state) => state.getApi);

  useEffect(() => {
    getProduct();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(0);
  const callDeleteAPI = useProductsStore((state) => state.deleteProduct);

  useEffect(() => {
    if (data.length == 0) {
      callGetAPI();
    }
  }, []);

  const openDeleteConfirmationModalHandler = (id) => {
    setItemIdToDelete(id);
    setShowModal(true);
  };

  const closeDeleteConfirmationModalHandler = () => {
    setItemIdToDelete(0);
    setShowModal(false);
  };

  const confirmDeleteHandler = async () => {
    await callDeleteAPI(itemIdToDelete);
    setItemIdToDelete(0);
    setShowModal(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          {data.map((product: { img: string | undefined }) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "400", width: "100%" }}
                  src={product?.img}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      openDeleteConfirmationModalHandler(product.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/updateProduct/${product.id}`)}
                    className="ms-2"
                  >
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <DeleteConfirmation
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you sure to delete the item?"
        closeDeleteConfirmationModalHandler={
          closeDeleteConfirmationModalHandler
        }
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
    </>
  );
};

export default GetProducts;

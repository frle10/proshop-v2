import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return (
      <Message variant='danger'>{error?.data?.message || error?.error}</Message>
    );
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
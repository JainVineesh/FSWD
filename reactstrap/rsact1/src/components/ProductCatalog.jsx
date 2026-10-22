//Add code here to import necessary libraries and components
import {useState} from 'react'
import {Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

const PRODUCTS = [
  {id: 1, name: 'Wireless Headphones', category: 'Audio', price: 59},
  {id: 2, name: 'Mechanical Keyboard', category: 'Accessories', price: 89},
  {id: 3, name: '4K Webcam', category: 'Video', price: 45},
]

const ProductCatalog = () => {
  //Add code here to manage the cart state
  const [cart, setCart] = useState({})

  const handleAddToCart = (productId) => {
    //Add code here to add the product to the cart
    const updatedCart = {...cart, [productId]:true}
    console.log("Cart after Click: ", updatedCart)
    setCart(updatedCart)
};

  return (
    //Add code here to display the product catalog and the cart
    <Container>
      <h2>Product Catalog</h2>
      <Row>
        {PRODUCTS.map((p)=>(
          <Col sm='4' key={p.id} className='mb-4'>
            <Card>
              <CardBody>
                <CardTitle>{p.name}</CardTitle>
                <CardSubtitle>{p.category}</CardSubtitle>
                <CardText>OMR {p.price.toFixed(3)}</CardText>
                <Button
                  color={cart[p.id]?"secondary":"primary"}
                  disabled = {!!cart[p.id]}
                  onClick={()=>handleAddToCart(p.id)}
                >
                  {cart[p.id]?"Added":"Add to Cart"}
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default ProductCatalog
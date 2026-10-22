import {useState} from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

const PRODUCTS = [
    {id:1, name:"Wireless Headphones", category:"Audio", price:59},
    {id:2, name:"Mechanical Keyboard", category:"Accessories", price:89},
    {id:3, name:"4K Webcam", category:"Video", price:45},
]

const ProductCatalog = () => {
    const [cart, setCart] = useState({})

    const handleAddToCart = (productId) => {
        setCart({...cart, [productId]:true})
    }

  return (
    <Container className='mt-4'>
      <h2>Product Catalog</h2>
      <Row>
        {PRODUCTS.map((product) => (
            <Col sm="4" key={product.id} className='mb-4'>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className='mb-2 text-muted'>
                            {product.category}
                        </CardSubtitle>
                        <CardText>OMR {product.price}</CardText>
                        <Button
                            color={cart[product.id]?"secondary":"primary"}
                            disabled={!!cart[product.id]}
                            onClick={()=>handleAddToCart(product.id)}>
                                {cart[product.id]?"Added":"Add to Cart"}
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

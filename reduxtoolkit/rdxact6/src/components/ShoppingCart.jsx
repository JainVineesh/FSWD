import { useDispatch, useSelector } from "react-redux";
import { Container, Table, Button } from "reactstrap";
import { increaseQuantity, decreaseQuantity, selectCartTotal } from "../redux/cartSlice";

const ShoppingCart = () => {
    const items = useSelector((state)=>state.cart.items)
    const total = useSelector(selectCartTotal)

    const dispatch=useDispatch()
    return (
        <Container className="mt-4">
            <Table>
                <thead>
                    <tr>
                        <th>Item</th><th>Price</th><th>Quantity</th><th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Button size="sm" color="secondary" onClick={()=>dispatch(decreaseQuantity(item.id))}>-</Button>{" "}
                                {item.quantity} {" "}
                                <Button size="sm" color="secondary" onClick={()=>dispatch(increaseQuantity(item.id))}>+</Button>
                            </td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3">
                            Total
                        </td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default ShoppingCart
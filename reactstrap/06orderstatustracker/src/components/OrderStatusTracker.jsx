import { Container, Table, Badge, Progress } from "reactstrap"

const STATUS_COLOR = {
    Processing: "warning",
    Shipped: "info",
    Delivered: "success",
}

const ORDERS = [
    {id:"ORD-101", status:"Processing", progress: 25},
    {id:"ORD-102", status:"Shipped", progress: 70},
    {id:"ORD-103", status:"Delivered", progress: 100},
]

const OrderStatusTracker = () => {
  return (
    <Container className="mt-4">
      <h2>Order Status Tracker</h2>
      <Table>
        <thead>
            <th>Order ID</th>
            <th>Status</th>
            <th>Progress</th>
        </thead>
        <tbody>
            {ORDERS.map((order)=>(
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>
                        <Badge color={STATUS_COLOR[order.status]}>{order.status}</Badge>
                    </td>
                    <td>
                        <Progress value={order.progress} color={STATUS_COLOR[order.status]}>{order.progress}%</Progress>
                    </td>
                </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderStatusTracker

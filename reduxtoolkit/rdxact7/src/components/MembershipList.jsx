import { useSelector } from "react-redux"
import { Container, Table } from "reactstrap"
 
function MembershipList() {
  const items = useSelector((state) => state.memberships.items)
 
  return (
    <Container className="mt-4">
      <h2>Memberships</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Monthly Fee</th>
            <th>Number of Months</th>
            <th>Payable</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.memberName}</td>
              <td>{item.monthlyFee}</td>
              <td>{item.numberOfMonths}</td>
              <td>{item.monthlyFee * item.numberOfMonths}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
 
export default MembershipList

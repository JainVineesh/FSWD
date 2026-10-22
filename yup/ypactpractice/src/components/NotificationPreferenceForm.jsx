import { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Table,
} from "reactstrap";
import notificationSchema from "../schemas/notificationSchema";

const NotificationPreferenceForm = () => {
  const [members, setMembers] = useState([]);

  return (
    <Container className="mt-4">
      <h2>Notification Preference</h2>
      <Form>
        <FormGroup>
          <Label for="notificationPreference">Notification Preference</Label>
          <Input id="notificationPreference" type="select">
            <option value="">Select a notification preference</option>
            <option value="sms">SMS</option>
            <option value="email">Email</option>
            <option value="post">Postal Mail</option>
          </Input>
        </FormGroup>

        {/* notificationPreference is mobile */}
        <FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input id="mobileNumber" type="text" />
        </FormGroup>

        {/* notificationPreference is email */}
        <FormGroup>
          <Label for="emailAddress">Email Address</Label>
          <Input id="emailAddress" type="text" />
        </FormGroup>
        {/* notificationPreference is post */}
        <FormGroup>
          <Label for="mailingAddress">Mailing Address</Label>
          <Input id="mailingAddress" type="text" />
        </FormGroup>

        <Button color="primary" type="submit">
          Save Preference
        </Button>
      </Form>

      <Table className="mt-4">
        <thead>
          <tr>
            <th>Preference</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{/* Write Code here */}</tbody>
      </Table>
    </Container>
  );
};

export default NotificationPreferenceForm;

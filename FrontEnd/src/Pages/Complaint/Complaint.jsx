import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
const Complaint = () => {
  return (
    <>
    <center><h2>Complaint Forum</h2></center>
    <h3>Common FAQ</h3>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can I apply for a Fire NOC online?</Accordion.Header>
        <Accordion.Body>
        Answer:
To apply for a Fire NOC online, you need to visit your states official fire department website or the municipal corporations portal, fill out the required form, upload necessary documents like building plans and fire safety equipment details, and submit the application. You will receive updates on the approval process via the portal.


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What documents are required to apply for a Fire NOC online?</Accordion.Header>
        <Accordion.Body>
        Answer:
The necessary documents include:

Building layout plan
Fire safety equipment details
Structural safety certificate
Architects certificate
Water supply details
Proof of land ownership or lease Specific documents may vary depending on state regulations.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How long does it take to issue a Fire NOC online?</Accordion.Header>
        <Accordion.Body>
        Answer:
        The time for issuance of a Fire NOC varies depending on the states rules and the complexity of the application. On average, it takes between 15 to 30 days for inspection and final approval, provided all documents are in order and the premises meet the safety standards.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> What is the fee for obtaining a Fire NOC in India?</Accordion.Header>
        <Accordion.Body>
        Answer:
        The fee for Fire NOC issuance varies from state to state and depends on the size and nature of the building. Residential and commercial buildings have different fee structures, and it may also depend on the buildings total floor area. The details can usually be found on the respective online portal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I renew a Fire NOC online, and how often do I need to renew it?</Accordion.Header>
        <Accordion.Body>
        Answer:
        Yes, Fire NOCs can usually be renewed online. The renewal frequency depends on local regulations, but typically, it is required every 1 to 3 years. You will need to submit a renewal application with updated fire safety measures and compliance documents through the same online portal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What happens if my Fire NOC application is rejected?</Accordion.Header>
        <Accordion.Body>
        Answer:
        If your Fire NOC application is rejected, the fire department will provide reasons for rejection, such as non-compliance with fire safety norms or missing documents. You can reapply after addressing the issues mentioned in the rejection notice and making necessary corrections.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <hr />
    <center><h2>Lodge complaint</h2></center>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Target Institute</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Here by I declare that my alegations are not false and I will be accountable to the authority if any of the information I provided is falsified during the jusrisdiction of the matter." />
      </Form.Group>


      <InputGroup>
        <InputGroup.Text>Your complaint in short</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Complaint
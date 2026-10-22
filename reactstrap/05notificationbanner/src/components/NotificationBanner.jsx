import { useState } from 'react'
import { Container, Alert, Button } from 'reactstrap'

let nextId = 1;

const NotificationBanner = () => {
    const [alerts, setAlerts] = useState([])

    const addAlert = (color, message) => {
        setAlerts([...alerts, {id:nextId++, color, message}])
    }

    const dismissAlert = (id) => {
        setAlerts(alerts.filter((a)=>a.id!==id))
    }

  return (
    <Container className='mt-4'>
        <h2>System Notifications</h2>
        <Button color="info" className='me-2' onClick={()=>addAlert("info", "A new update is available")}>Trigger Info</Button>
        <Button color="success" className='me-2' onClick={()=>addAlert("success", "Your changes were saved successfully")}>Trigger Success</Button>
        <Button color="warning" className='me-2' onClick={()=>addAlert("warning", "Your session will expire in 5 minutes")}>Trigger warning</Button>
        <Button color="danger" onClick={()=>addAlert("danger", "Failed to connect to the server")}>Trigger Danger</Button>

        <div className='mt-3'>
            {alerts.map((alert)=>(
                <Alert key={alert.id} color={alert.color} isOpen toggle={()=>dismissAlert(alert.id)}>
                    {alert.message}
                </Alert>
            ))}
        </div>
    </Container>
  )
}

export default NotificationBanner

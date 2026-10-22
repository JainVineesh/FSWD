import {useEffect, useState} from 'react'
import { Container, Alert, Button } from 'reactstrap'

let nextID = 1

const NotificationBanner = () => {
    const [alerts, setAlerts] = useState([])

    const addAlerts = (color, message) => {
        setAlerts([...alerts, {id:nextID++, color, message}])
    }

    useEffect(()=>{
        console.log("Alerts updated: ",alerts)
    }, [alerts])

    const dismissAlert = (id) => {
        setAlerts(alerts.filter((a)=>a.id!==id))
    }

  return (
    <Container>
      <h2>System Notifications</h2>
      <Button color='info' className='me-2' onClick={()=>addAlerts("info", "A new update is available")}>Trigger Info</Button>
      <Button color='success' className='me-2' onClick={()=>addAlerts("success", "Data Updated Successfully.")}>Trigger Success</Button>
      <Button color='warning' className='me-2' onClick={()=>addAlerts("warning", "Server will restart in 5 minutes")}>Trigger Warning</Button>
      <Button color='danger' className='me-2' onClick={()=>addAlerts("danger", "Connection failed to the database")}>Trigger Danger</Button>
      <div className='mt-3'>
        {alerts.map((a)=>(
            <Alert key={a.id} color={a.color} isOpen toggle={()=>dismissAlert(a.id)}>{a.message}</Alert>
        ))}
      </div>
    </Container>
  )
}

export default NotificationBanner

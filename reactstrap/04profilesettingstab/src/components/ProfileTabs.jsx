import { useState } from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import classnames from "classnames"

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("1")

    const toggle = (tab) => {
        if(activeTab !== tab) setActiveTab(tab)
    }

  return (
    <Container className='mt-4'>
      <h2>Profile Settings</h2>
      <Nav tabs>
        <NavItem>
            <NavLink 
                className={classnames({active:activeTab === "1"})}
                onClick={()=>toggle("1")}
            >Personal Info</NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
                className={classnames({active:activeTab === "2"})}
                onClick={()=>toggle("2")}
            >Security</NavLink>
        </NavItem>
        <NavItem>
            <NavLink 
                className={classnames({active:activeTab === "3"})}
                onClick={()=>toggle("3")}
            >Notifications</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className='p-3 border border-top-0'>
        <TabPane tabId="1">
            <p>Update your name, email and profile photo here.</p>
        </TabPane>
        <TabPane tabId="2">
            <p>Change your password and manage two-factor authentication here.</p>
        </TabPane>
        <TabPane tabId="3">
            <p>Choose which email and push notifications you want to receive.</p>
        </TabPane>
      </TabContent>
    </Container>
  )
}

export default ProfileTabs

import {useState} from 'react'
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classnames from 'classnames'

const ProfileSettingsTabs = () => {
    const [activeTab, setActiveTab] = useState("1")

    const toggle = (tab) => {
        if(activeTab !== tab) setActiveTab(tab)
    }

  return (
    <Container>
      <Nav tabs>
        <NavItem>
            <NavLink className={classnames({active: activeTab==="1"})} onClick={()=>toggle("1")}>Personal Info</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className={classnames({active: activeTab==="2"})} onClick={()=>toggle("2")}>Security</NavLink>
        </NavItem>
        <NavItem>
            <NavLink className={classnames({active: activeTab==="3"})} onClick={()=>toggle("3")}>Notifications</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className='p-3 border border-top-0'>
        <TabPane tabId={"1"}><p>Update personal information</p></TabPane>
        <TabPane tabId={"2"}><p>Update email, password etc.</p></TabPane>
        <TabPane tabId={"3"}><p>Important notifications</p></TabPane>
      </TabContent>
    </Container>
  )
}

export default ProfileSettingsTabs

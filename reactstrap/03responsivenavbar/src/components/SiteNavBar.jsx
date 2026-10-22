import {useState} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'


const SiteNavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color="light" light expand='md' className='mt-4'>
      <NavbarBrand href="#">MyCompany</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ms-auto' navbar>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#services">Services</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contact">Contact</NavLink>
            </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default SiteNavBar

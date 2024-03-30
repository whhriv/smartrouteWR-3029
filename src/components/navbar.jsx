import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import './navbar.css'
function NavBar() {
  return (


<Navbar expand="sm" className="bg-body-tertiary mx-auto flex-column flex-sm-row" data-bs-theme="dark">
<Container>

 
    <Nav variant="pills" className="mx-auto flex-column flex-sm-row">

        <Nav.Item>
            <Nav.Link className="tabs me-4" href="/MapSpaceOld">  VIEW  </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="tabs" href="/DirectionsList">  LIST  </Nav.Link>
        </Nav.Item>
    </Nav>
        <Navbar.Brand className=" pink " href="/">
        
            <Image src="../../public/smart_route_small_logo.png" alt="SmartRoute" style={{ height: '40px' }} />
        </Navbar.Brand>
 
</Container>
</Navbar>
);
}

export default NavBar;

{/* <Nav variant="pills" defaultActiveKey="/">
<Nav.Item>
  <Nav.Link className="tabs" href="/MapSpaceOld">VIEW</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link className="tabs" href="/DirectionsList">LIST</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav.Item>
<Navbar.Brand className=" pink " href="/">
    
    <Image src="../../public/smart_route_small_logo.png" alt="SmartRoute" style={{ height: '40px' }} />
    </Navbar.Brand>
</Nav>
);
  } */}

// {/* <Navbar expand="sm" className="bg-body-tertiary mx-auto flex-column flex-sm-row" data-bs-theme="dark">
// <Container>

 
//     <Nav className="mx-auto flex-column flex-sm-row">


//       <Nav.Link className=" me-5" href="/CreateRoute">CREATE</Nav.Link>
//       <Nav.Link className=" me-5" href="/MapSpaceOld">VIEW</Nav.Link>
//       <Nav.Link className="" href="/DirectionsList">LIST</Nav.Link>
      
//     </Nav>
//     <Navbar.Brand className=" pink " href="/">
    
//   <Image src="../../public/smart_route_small_logo.png" alt="SmartRoute" style={{ height: '40px' }} />
//   </Navbar.Brand>
 
// </Container>
// </Navbar>
// );
// } */}
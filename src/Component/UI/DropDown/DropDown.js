import Dropdown from 'react-bootstrap/Dropdown';

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark-outline" id="dropdown-basic">
        Know More 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">About</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Team</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact US</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
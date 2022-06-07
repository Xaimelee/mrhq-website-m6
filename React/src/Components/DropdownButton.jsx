import Dropdown from 'rsuite/Dropdown';

function DropdownButton({title}) {
    return(
        <Dropdown title = {title}>
            <Dropdown.Item>New File</Dropdown.Item>
            <Dropdown.Item>New File with Current Profile</Dropdown.Item>    
            <Dropdown.Item>Download As...</Dropdown.Item>
            <Dropdown.Item>Export PDF</Dropdown.Item>
            <Dropdown.Item>Export HTML</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>About</Dropdown.Item>
        </Dropdown>
    )
}

export default DropdownButton
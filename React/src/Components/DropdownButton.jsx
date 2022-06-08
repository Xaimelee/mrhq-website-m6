import { useState } from "react";
import ButtonDropdownDownIcon from "../Images/button-dropdown-down.png"
import ButtonDropdownUpIcon from "../Images/button-dropdown-up.png"

function DropdownButton({containerClassName, buttonClassName, title, dropdownClassName, listClassName, listEntries}) {
    const [open, setOpen] = useState(false)

    function handleOnClick() {
        setOpen(!open)
    }

    return (
        <div className = {containerClassName}>
            <button type = "button" className = {buttonClassName} onClick={() => handleOnClick()}>
                {title}
                {open 
                    ? <img className = "DropdownButtonIcon" src = {ButtonDropdownUpIcon} alt = "" />
                    : <img className = "DropdownButtonIcon" src = {ButtonDropdownDownIcon} alt = "" />
                }
            </button>
            {open &&
                <div className = {dropdownClassName}>
                    <ul className = {listClassName}>
                       {listEntries}
                    </ul>
                </div>
            }
        </div>
    )
}

export default DropdownButton
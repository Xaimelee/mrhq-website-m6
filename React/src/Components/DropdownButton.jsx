import { useState } from "react";

function DropdownButton({containerClassName, buttonClassName, title, dropdownClassName, listClassName, listEntries}) {
    const [open, setOpen] = useState(false)

    function handleOnClick() {
        setOpen(!open)
    }

    return (
        <div className = {containerClassName}>
            <button type = "button" className = {buttonClassName} onClick={() => handleOnClick()}>
                {title}           
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
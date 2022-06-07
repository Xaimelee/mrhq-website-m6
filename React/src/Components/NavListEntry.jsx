import { Link } from "react-router-dom";

function NavListEntry({entryClassName, linkClassName, link, text}) {
    return (
        <li className = {entryClassName}><Link to = {link} className = {linkClassName}>{text}</Link></li>
    )
}

export default NavListEntry
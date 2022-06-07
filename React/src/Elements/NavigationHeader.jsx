import PetLogo from "../Images/1-nav-bar/logo.png"
import HeaderList from "../Components/HeaderList"
import NavigationProductList from "./NavigationProductList"
import NavigationAccountList from "./NavigationAccountList"

function NavigationHeader() {
    let entries = [
        <>
        <li><img className = "NavigationHeaderLogo" src = {PetLogo} alt = "" /></li>
        <NavigationProductList />
        <NavigationAccountList />
        </>
    ]

    return (
        <HeaderList headerClassName = "NavigationHeader" listClassName = "NavigationHeaderList" listEntries = {entries}/>
    )
}

export default NavigationHeader
import HeaderListEntry from "../Components/HeaderListEntry"
import ListImageEntry from "../Components/ListImageEntry"
import NavigationProductListEntry from "../Components/NavigationProductListEntry"
import DogMenu from "../Images/1-nav-bar/dog-menu-item.png"
import CatMenu from "../Images/1-nav-bar/cat-menu-item.png"
import FishMenu from "../Images/1-nav-bar/fish-menu-item.png"
import BunnyMenu from "../Images/1-nav-bar/bunny-menu-item.png"
import BirdMenu from "../Images/1-nav-bar/bird-menu-item.png"
import TurtleMenu from "../Images/1-nav-bar/turtle-menu-item.png"
import HorseMenu from "../Images/1-nav-bar/horse-menu-item.png"
import SpecialsMenu from "../Images/1-nav-bar/specials-menu-item.png"

function NavigationProductList({entryClassName}) {
    const listEntryClassName = "NavigationHeaderProductListEntry"
    const buttonClassName = "NavigationHeaderProductListButton"
    const imageEntryClassName = "NavigationHeaderProductListImage"

    let listEntries = [
        <>
        <NavigationProductListEntry entryClassName = {listEntryClassName} buttonClassName = {buttonClassName} imageClassName = {imageEntryClassName} image = {DogMenu} categoryIndex = {0}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {CatMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {FishMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {BunnyMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {BirdMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {TurtleMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {HorseMenu}/>
        <ListImageEntry entryClassName = {listEntryClassName} imageClassName = {imageEntryClassName} image = {SpecialsMenu}/>
        </>
    ]

    return (
        <HeaderListEntry entryClassName = {entryClassName} listClassName = "NavigationHeaderProductList" listEntries = {listEntries}/>
    )
}

export default NavigationProductList
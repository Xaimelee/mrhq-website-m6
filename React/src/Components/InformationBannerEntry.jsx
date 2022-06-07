import ImageEntry from "./ImageEntry"
import ListTextListEntry from "./ListTextListEntry"

function InformationBannerEntry({image, listEntries}) {
    return (
        <li className = "InformationBannerEntry">
            <ImageEntry imageClassName = "InformationBannerImage" image = {image}/>
            <ListTextListEntry listClassName = "InformationBannerEntryTextList" listEntries = {listEntries}/>
        </li>
    )
}

export default InformationBannerEntry
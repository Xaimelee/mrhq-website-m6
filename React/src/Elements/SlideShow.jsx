import { Fade } from 'react-slideshow-image';
import Banner1 from "../Images/2-top-rolling-banner/banner-1.png"
import Banner2 from "../Images/2-top-rolling-banner/banner-2.png"
import Banner3 from "../Images/2-top-rolling-banner/banner-3.png"

function SlideShow() {
    const properties = {
        arrows: false,
        autoplay: true,
        indicators: false,
        duration: 2000
    };

    const fadeImages = [
        {
            url: Banner1,
            caption: "Banner 1"
        },
        {
            url: Banner2,
            caption: "Banner 2"
        },
        {
            url: Banner3,
            caption: "Banner 3"
        }
    ]

    return (
        <Fade {...properties}>
            {fadeImages.map((fadeImage, index) => (
                <div key={index}>
                    <img className="SlideImage" src={fadeImage.url} alt = ""/>
                </div>
            ))}
        </Fade>
    )
}

export default SlideShow
import { Carousel } from "react-bootstrap";
import Img_01 from "../../images/img_carousel/Carousel_01.jpg"
import Img_02 from "../../images/img_carousel/Carousel_02.jpeg"
import Img_03 from "../../images/img_carousel/Carousel_03.jpg"
import './Carousel.css'

const Galery = () => {
    return (
        <>
        <div className="container container_carousel">
            <Carousel variant="#742655">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_img"
                        src={Img_01}
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_img"
                        src={Img_02}
                    />                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_img"
                        src={Img_03}
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}
export default Galery;
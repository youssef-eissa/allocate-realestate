import { WrapperSection } from "../StyledComponents/Section.style"
import './Testimonials.css'
import Slider from "react-slick";
function Testimonials() {
    const settings = {
    arrows: false,
    dots:false,
    infinite: true,
    speed: 1000,
        autoplay: true,
    slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    responsive: [
        {
        breakpoint: 600,
            settings: {
            arrows: false,
            touchMove: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            }
            }
        ]
    }

    return (
        <div className="container-fluid p-0 testContainer">
            <div className="row">
                <WrapperSection className="col-12 p-0 d-flex flex-column align-items-center testimonial">
                    <div style={{backgroundColor:'white'}} className="col-12 text-center SectionTitle mb-">
                        <div className="title col-12">Client Stores</div>
                    </div>
                    <div className="col-10 SliderContainer rounded overflow-hidden d-flex align-items-center ">
                        <Slider className="col-12" {...settings}>
                            <div className="d-flex flex-column align-items-center p-5">
                                <p className="col-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed expedita aperiam porro deleniti libero repudiandae. Beatae debitis perferendis quis ipsam, incidunt eligendi optio quo reprehenderit reiciendis facere dolor nam?</p>
                                <span >test</span>
                            </div>
                            <div className="d-flex flex-column align-items-center p-5">
                                <p className="col-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed expedita aperiam porro deleniti libero repudiandae. Beatae debitis perferendis quis ipsam, incidunt eligendi optio quo reprehenderit reiciendis facere dolor nam?</p>
                                <span >Youssef</span>
                            </div>
                            <div className="d-flex flex-column align-items-center p-5">
                            <p className="col-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed expedita aperiam porro deleniti libero repudiandae. Beatae debitis perferendis quis ipsam, incidunt eligendi optio quo reprehenderit reiciendis facere dolor nam?</p>
                                <span >Youssef</span>
                            </div>
                            <div className="d-flex flex-column align-items-center p-5">
                            <p className="col-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sed expedita aperiam porro deleniti libero repudiandae. Beatae debitis perferendis quis ipsam, incidunt eligendi optio quo reprehenderit reiciendis facere dolor nam?</p>
                                <span >omar</span>
                            </div>

                    </Slider>
                    </div>

                </WrapperSection>
            </div>
    </div>
)
}

export default Testimonials
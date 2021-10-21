import Title from "../components/Title/Title";
import Location from "../components/Contact/Location";
import SocialNetworks from "../components/SocialNetworks/SocialNetworks";
import Footer from "../components/Footer/Footer";

const Contact =() =>{
    return (
        <>
            <div className="my-5">
                <Title text="Formas de contacto"/>
                <Location/>
            </div>
            <section className="row">
                <SocialNetworks/>
            </section>
                <Footer/>
        </>
    )
}

export default Contact;
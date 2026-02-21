import Marquee from "react-fast-marquee";
import logo01 from "../../assets/Partners/NASTP.png";
import logo02 from "../../assets/Partners/HT-Crew-logo.png";
import logo03 from "../../assets/Partners/NeuSOl.png";
import logo04 from "../../assets/Partners/blue-prudential-logo.png";
import logo05 from "../../assets/Partners/nortech.png";
import logo06 from "../../assets/Partners/sahara-group.png";

const BrandSection: React.FC = () => {
    return (
        <section className="brand pt-170 pb-150" >
            <div className="container">
                <div className="xb-brand-wrap xb-border">
                    <div className="brand-sub-title xb-border">
                        <p>
                            World's Best <span>Companies</span> Work With Us
                        </p>
                    </div>
                    <Marquee speed={40} gradient={false} pauseOnHover={false}>
                        <div className="brand-marquee marquee-left">
                            <div className="xb-brand-inner ul_li_between">
                                {[logo01, logo02, logo03, logo04, logo05, logo06].map(
                                    (logo, index) => (
                                        <div className="xb-brand-item" key={index}>
                                            <img src={logo} alt={`logo ${index + 1}`} />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </Marquee>

                </div>
            </div>
        </section>
    );
};

export default BrandSection;



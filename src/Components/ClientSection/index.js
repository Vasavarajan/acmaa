import React from "react";
import Marquee from "react-fast-marquee";

import {
    ClientContainer,
    ClientWrapper,
    ClientTitle,
    ClientList,
    ImgWrap,
    Img,
} from "./ClientElements";

import Img0 from "../../Assets/Images/Clients_logo/0.png";
import Img1 from "../../Assets/Images/Clients_logo/1.png";
import Img2 from "../../Assets/Images/Clients_logo/2.png";
import Img3 from "../../Assets/Images/Clients_logo/3.png";
import Img4 from "../../Assets/Images/Clients_logo/4.png";
import Img5 from "../../Assets/Images/Clients_logo/5.png";
import Img6 from "../../Assets/Images/Clients_logo/6.png";
import Img7 from "../../Assets/Images/Clients_logo/7.png";
import Img8 from "../../Assets/Images/Clients_logo/8.png";
import Img9 from "../../Assets/Images/Clients_logo/9.png";
import Img10 from "../../Assets/Images/Clients_logo/10.png";
import Img11 from "../../Assets/Images/Clients_logo/11.png";
import Img12 from "../../Assets/Images/Clients_logo/12.png";
import Img13 from "../../Assets/Images/Clients_logo/13.png";
import Img14 from "../../Assets/Images/Clients_logo/14.png";
import Img15 from "../../Assets/Images/Clients_logo/15.png";
import Img16 from "../../Assets/Images/Clients_logo/16.png";
import Img17 from "../../Assets/Images/Clients_logo/17.png";
import Img18 from "../../Assets/Images/Clients_logo/18.png";
import Img19 from "../../Assets/Images/Clients_logo/19.png";
import Img20 from "../../Assets/Images/Clients_logo/20.png";
import Img21 from "../../Assets/Images/Clients_logo/21.png";
import Img22 from "../../Assets/Images/Clients_logo/22.png";
import Img23 from "../../Assets/Images/Clients_logo/23.png";
import Img24 from "../../Assets/Images/Clients_logo/24.png";
import Img25 from "../../Assets/Images/Clients_logo/25.png";

const ClientSection = () => {
    return (
        <ClientContainer>
            <ClientWrapper>
                <ClientTitle>Our Clients</ClientTitle>

                <ClientList>
                    <Marquee
                        direction="left"
                        speed={50}
                        pauseOnHover={true}
                        gradientWidth={50}
                        gradientColor={[245, 251, 255]}
                    >
                        <ImgWrap>
                            <Img src={Img0} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img1} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img2} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img3} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img4} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img5} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img6} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img7} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img8} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img9} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img10} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img11} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img12} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img13} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img14} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img15} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img16} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img17} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img18} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img19} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img20} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img21} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img22} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img23} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img24} />
                        </ImgWrap>
                        <ImgWrap>
                            <Img src={Img25} />
                        </ImgWrap>
                    </Marquee>
                </ClientList>
            </ClientWrapper>
        </ClientContainer>
    );
};

export default ClientSection;

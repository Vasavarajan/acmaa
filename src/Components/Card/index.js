import React from "react";

import Img from "../../Assets/Images/CRANK CASE R.H OIL PASSAGE LTM 1.png";
// import Img from "../../Assets/Images/Clients_Logos/WHEELS_INDIA (2).png";

import {
    CardContainer,
    CardImg,
    CardH2,
    CardP,
    CardLink,
    CardContent,
} from "./CardElements";

function Card() {
    return (
        <CardContainer>
            <CardImg src={Img} />
            <CardContent>
                <CardH2>Reduce expences</CardH2>
                <CardP>
                    We help reduce your fees and increase your overall revenue.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus beatae neque aliquam ex vero unde fugiat mollitia
                    magni pariatur! Ad nesciunt saepe iste porro temporibus.
                </CardP>
                <CardLink>ReadMore</CardLink>
            </CardContent>
        </CardContainer>
    );
}

export default Card;

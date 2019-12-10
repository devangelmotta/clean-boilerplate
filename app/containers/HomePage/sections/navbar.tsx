import React from 'react';
import { Row } from "../../../components/Row";
import LeftUser from "../../../Icons/GcIconLogout";
import Logo from "../../../Icons/GcIconLogo";
import "../styles.css"

export default function NavbarComponent() {
    return (
        <Row backgroundColor="#7161d6" height="4rem">
            <Row padding="1rem 0 1rem 1rem"><Logo width="100px" height="100px" color="#fff" /></Row>
            <Row
                justifyContent="flex-end"
                padding="1rem 1rem 1rem 1rem"
                margin="0 0 0 1rem"
                backgroundColor="#aa6ee8"
                width="3rem" height="3rem"
                borderRadius="1rem"
            ><LeftUser width="2rem" height="2rem" color="#fff" /></Row>

        </Row>
    )
}
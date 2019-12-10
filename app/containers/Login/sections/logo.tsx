import React from 'react';
import { Row } from "../../../components/Row";
import Image from "../../../components/Img";
import { GcLogoDefault } from "../../../images"
import "../styles.css"

export default function LogoComponent() {
    return (
        <Row className="container-logo" padding="0 0 1rem 0">
            <Image src={GcLogoDefault} alt="Go Cloud" />
        </Row>)
}
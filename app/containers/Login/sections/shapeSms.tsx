
import React from 'react';
import { Row } from "../../../components/Row";
import Image from "../../../components/Img";
import { SmsLoginBg } from "../../../images"
import "../styles.css"

export default function ShapeSMSComponent() {
    return (
        <Row className="shape-right-login" width="65%" height={`${window.innerHeight}px`} justifyContent="flex-end">
            <Image className="image-sms" src={SmsLoginBg} />
        </Row>
    )
}
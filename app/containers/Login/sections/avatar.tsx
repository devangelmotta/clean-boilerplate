
import React from 'react';
import { Row } from "../../../components/Row";
import { Avatar } from "../../../components/Avatar";
import { GcRobot } from "../../../images"
import "../styles.css"
export default function AvatarComponent() {
    return (
        <Row
            className="box-input-item container-avatar"
            width="8rem" height="8rem"
            borderColor="#e6e8f6"
            borderWidth="2px"
            justifyContent="flex-start" >
            <Avatar src={GcRobot} width="7rem" height="8rem" />
        </Row>)
}
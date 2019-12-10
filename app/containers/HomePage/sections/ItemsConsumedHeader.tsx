import React from 'react';
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Text } from "../../../components/Text";
import Phone from "../../../Icons/GcIconPhone";
import ArrowDown from "../../../Icons/GcIconDownArrow";
import BubleChat from "../../../Icons/GcIconDialog";
import Check from "../../../Icons/GcIconCheck";
import Waiting from "../../../Icons/GcIconWaiting";
import Cancel from "../../../Icons/GcIconMultiply";
import Clock from "../../../Icons/GcIconTime";

export default function ItemsConsumeHrader() {
    return (
        <Row>
            <Column justifyContent="center">
                <Text color="#4171ed" fontSize="1.5rem" fontWeight={700}>36</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>Transferidos</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><ArrowDown color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#4171ed" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#04bdbc" fontSize="1.5rem" fontWeight={700}>3728</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>Iniciadas</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><BubleChat color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#04bdbc" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#8552ea" fontSize="1.5rem" fontWeight={700}>11712</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>Discadas</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"> <Check color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#8552ea" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#ff9d00" fontSize="1.5rem" fontWeight={700}>7984</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>No iniciadas</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><Waiting color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#ff9d00" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#0796de" fontSize="1.5rem" fontWeight={700}>11712</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>Números</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><Phone color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#0796de" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#ce1a3b" fontSize="1.5rem" fontWeight={700}>10</Text>
                <Text color="#7e8296" fontSize="1rem" fontWeight={100}>Fallidas</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><Cancel color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#ce1a3b" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>

            <Column>
                <Text color="#" fontSize="1.5rem" fontWeight={700}>14</Text>
                <Text color="#f90e78" fontSize="1rem" fontWeight={100}>Compromiso Pago</Text>
                <Row width="null" height="null" padding="0 0 0.4rem 0"><Clock color="#b7bbe8" width="0.8rem" height="0.8rem" /></Row>
                <Row backgroundColor="#f90e78" height="0.5rem" width="85%" borderRadius="10rem" />
            </Column>
        </Row>
    )

}
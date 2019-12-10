import React from 'react';
import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";


export default function ConsumeInformationComponent() {
    return (
        <Row backgroundColor="#439bd5" borderRadius="10rem" height="2rem">
            <Row padding="0 0 0 0.5rem">
                <Text color="#fff" fontWeight={500} >Nombre de la campaña </Text>
            </Row>

            <Row>
                <Row width="null" justifyContent="center" padding="0 0 0 0.1rem">
                    <Text color="#fff" fontWeight={600}>Progeso de discado: </Text>
                    <Text color="#c0f0f4" fontWeight={600} padding="0 0 0 0.4rem">73% </Text>
                </Row>

                <Row width="null" justifyContent="center" padding="0 0 0 0.1rem">
                    <Text color="#fff" fontWeight={600}>Consumo total: </Text>
                    <Text color="#c0f0f4" fontWeight={600} padding="0 0 0 0.4rem">2:37 min</Text>
                </Row>

                <Row width="null" justifyContent="center" padding="0 0 0 0.1rem">
                    <Text color="#fff" fontWeight={600}>Duración promedio llamada: </Text>
                    <Text color="#c0f0f4" fontWeight={600} padding="0 1rem 0 0.4rem">44seg</Text>
                </Row>
            </Row>

        </Row>
    )
}
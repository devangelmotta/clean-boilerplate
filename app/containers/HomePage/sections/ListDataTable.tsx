import React from 'react';
import { Table } from "../../../components/Table/TABLE";
import { Tr } from "../../../components/Table/TR";
import { Thead } from "../../../components/Table/THEAD";
import { Td } from "../../../components/Table/TD";
import Loading from "../../../components/LoadingIndicator";

import { Row } from "../../../components/Row";
import { Text } from "../../../components/Text";

interface Items {
    Items: object;
}
interface Props {
    data: Items;
}

function checkData(data: any) {
    if (data) {
        if (data.Items) {
            return true
        }
    } return false;

}
export default function ConsumeInformationComponent(props: Props) {
    var { data } = props;

    console.log(data);
    return (
        <Table padding="1rem 0 0 0">

            <Thead backgroundColor="#b9c0e3" borderRadius="0.8rem" height="3rem">
                <Tr>
                    <th><Text color="#fff" fontWeight={600} > TELÉFONO</Text></th>
                    <th><Text color="#fff" fontWeight={600} > FECHA</Text></th>
                    <th><Text color="#fff" fontWeight={600} > HORA</Text></th>
                    <th><Text color="#fff" fontWeight={600} > DURACIÓN</Text></th>
                    <th><Text color="#fff" fontWeight={600} > ÚLT. ETAPA</Text></th>
                    <th><Text color="#fff" fontWeight={600} > ÚLT. PASO</Text></th>
                    <th><Text color="#fff" fontWeight={600} > INTENTOS</Text></th>
                </Tr>

            </Thead>
            <tbody>
                {data && data.data && data.data.Items ? data.data.Items.map((item, index) => {
                    return (
                        <Tr key={item.idDetails.S} margin="1rem 0 0 0">
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.phone.S}</Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.date.S}</Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.hour.S}</Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.duration.S} </Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.last_stage.S}</Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.last_step.S}</Text></Td>
                            <Td><Text color="#908289" fontWeight={500} fontSize="1.rem">{item.intents.S}</Text></Td>
                        </Tr>
                    )
                }) : <Loading />}

            </tbody>

        </Table>
    )
}
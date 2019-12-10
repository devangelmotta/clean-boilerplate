import React, { useContext } from 'react';
import { Row } from "../../../components/Row";
import { Column } from "../../../components/Column";
import { Text } from "../../../components/Text";
import InputItem from "../../../components/FormGroup/InputItem";
import { Button } from "../../../components/Button";
import { ContextComponent } from "../../../components/FormGroup";
import messages from '../messages';
import { FormattedMessage } from 'react-intl';
import "../styles.css"

interface ContextFormValues {
    handleChange?: any;
    valuesInput?: any;
}

interface Props {
    dispatch?: any;
    loadLogin?: any;
}

export default function FormLoginComponent(props: Props, context: ContextFormValues) {
    var { dispatch, loadLogin } = props;
    context = useContext(ContextComponent);


    return (
        <div >
            <Column alignItems="flex-start">
                <Row width="null" height="null" className="box-input-item">
                    <Row >
                        <Text color="#706d7f" fontWeight={600} textAlign="right">Correo <br /> electrónico</Text>
                    </Row>

                    <Row justifyContent="center" padding="0 0 0 0.2rem">
                        <InputItem className="box-input" name="email" type="text" width="20vw" handleChange={context.handleChange} />
                    </Row>
                </Row>

                <Row width="null" height="null" className="box-input-item" padding="15px 0 0 0">
                    <div>
                        <Text color="#706d7f" fontWeight={600} textAlign="right">Contraseña</Text>
                    </div>
                    <InputItem className="box-input" name="password" type="password" width="20vw" handleChange={context.handleChange} />

                </Row>

            </Column>
            <Button
                onClick={() => dispatch(loadLogin({ ...context.valuesInput }))}

                backgroundColor="#e0457b"
                borderRadius="10rem"
                height="2.2rem" width="null"
                justifyContent="center"
                className="box-input-item button-login">
                <Text color="#FFF" fontWeight={600} fontSize="0.7rem" padding="0 1.5rem 0 1.5rem"><FormattedMessage {...messages.buttonSignIn} /></Text>
            </Button>
        </div>
    )
}
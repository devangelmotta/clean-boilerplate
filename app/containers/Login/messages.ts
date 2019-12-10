/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'omni.containers.login';

export default defineMessages({
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Correo electrónico',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Contraseña',
  },
  buttonSignIn: {
    id: `${scope}.buttonSignIn`,
    defaultMessage: 'INGRESAR',
  },
});

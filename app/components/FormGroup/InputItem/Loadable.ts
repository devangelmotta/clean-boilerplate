/**
 *
 * Asynchronously loads the component for InputItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

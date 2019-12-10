/**
 *
 * Asynchronously loads the component for FormComponents
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$o,0.00');
console.log(`I would pay ${courseValue} for this awsome course`);//eslint-disable-line no-console

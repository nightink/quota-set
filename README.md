# quota-set

## Use

```js
const quotaSetFn = require('quota-set');

const quotaSet = quotaSet(3);

console.log(quotaSet('Array'));
// ['Array']
console.log(quotaSet('Set'));
console.log(quotaSet('Map'));
console.log(quotaSet('Hash'));
// ['Hash', 'Map', 'Set']
```

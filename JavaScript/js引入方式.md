JS 引入包的方式
- ES Module(es6模块化)

  ```js
  import * as largeNumber from 'large-number';
  // ...
  largeNumber.add('999', '1');
  ```

-	CJS（commonJs模块）

  ```js
  const largeNumbers = require('large-number');
  // ...
  largeNumber.add('999', '1');
  ```

-	AMD 

  ```js
  require(['large-number'], function (large-number) {
  // ...
  largeNumber.add('999', '1');
  });
  ```

  


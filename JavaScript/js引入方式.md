JS 引入包的方式
- ES Module

  ```
  import * as largeNumber from 'large-number';
  // ...
  largeNumber.add('999', '1');
  ```

-	CJS

  ```
  const largeNumbers = require('large-number');
  // ...
  largeNumber.add('999', '1');
  ```

-	AMD 

  ```
  require(['large-number'], function (large-number) {
  // ...
  largeNumber.add('999', '1');
  });
  ```

  


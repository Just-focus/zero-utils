# zero-utils
前端工具库,封装前端日常开发过程中的通用代码

## 如何使用

下载npm包（浏览器中使用请看下面）

`yarn add @zerico/utils` 或者 `npm install @zerico/utils`


### 使用ESModule规范导入
```js
import { formatFloat } from '@zerico/utils';
console.log(formatFloat(3.14159, 1)) // 输出3.1
```

### 使用CommonJS规范导入
```js
const { formatFloat } = require('@zerico/utils')
console.log(formatFloat(3.14159, 1))
```

## 功能介绍

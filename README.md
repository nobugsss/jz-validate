# jz-validate
提供一些常用的正则表达式校验

```sh
npm install jz-validate
```

```js
import {mobile, code, email, password, idcard, number} from 'jz-validate';
```
or all import

```js
import validate from 'jz-validate';
```

## example

```js
{
  rule: '正则表达式',
  errMsg: '错误信息'
}
console.log(mobile)
```

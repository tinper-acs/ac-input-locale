## ac-input-locale

>  多语言 Input 组件 [进入示例](https://tinper-acs.github.io/ac-input-locale/)


```
$ ynpm install @yonyou/ac-input-locale --save-dev

引入

import AcInputLocale from '@yonyou/ac-input-locale';

样式引入

import '@yonyou/ac-input-locale/dist/index.css';
```

##效果  [进入示例](https://tinper-acs.github.io/ac-input-locale/)

## API

|参数|说明|类型|返回值|是否必填|
|:--|:---:|:--:|---:|---:|
|className|容器样式|string| --- | 否 |
|onOk|点击确定的钩子函数|fun|object | 否 |
|onCancel|点击取消的钩子函数|fun|Object | 否 |
|locale|当前语种|string | -- | 是 |
|localeList|语言列表|object| -- | 是 |
|onChange|输入框的change的钩子函数|fun| object | 否 |
|isTextarea|是否textarea，默认false|bool| -- | 否 |
|modalLocale|模态框中title、按钮的文字语态|object| -- | 否 |


#### 开发调试

```sh
$ cd @yonyou/ac-input-locale

$ ynpm install

$ npm run dev

```



# ac-input-locale

[![npm version](https://img.shields.io/npm/v/ac-input-locale.svg)](https://www.npmjs.com/package/ac-input-locale)
[![Build Status](https://img.shields.io/travis/tinper-bee/ac-input-locale/master.svg)](https://travis-ci.org/tinper-bee/ac-input-locale)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/ac-input-locale/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/ac-input-locale?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/ac-input-locale.svg)](https://david-dm.org/tinper-bee/ac-input-locale#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/ac-input-locale.svg?style=flat)](https://npmjs.org/package/ac-input-locale)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/ac-input-locale.svg)](http://isitmaintained.com/project/tinper-bee/ac-input-locale "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/ac-input-locale.svg)](http://isitmaintained.com/project/tinper-bee/ac-input-locale "Percentage of issues still open")


react ac-input-locale component for tinper-bee

some description...

## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```js

$ ynpm install ac-input-locale --save-dev

引入

import AcInputLocale from 'ac-input-locale';

样式引入

import 'ac-input-locale/dist/index.css';

```



## API

|参数|说明|类型|返回值|是否必填|
|:--|:---:|:--:|---:|---:|
|className|容器样式|string| --- | 否 |
|disabled|是否可用|string| --- | 否 |
|onOk|点击确定的钩子函数|fun|object | 否 |
|onCancel|点击取消的钩子函数|fun|Object | 否 |
|locale|当前语种|string | -- | 否 当前语种为空时，默认显示系统语种，若系统语种也为空时，显示zh_CN |
|sysLocale|系统语种|string | -- | 否 |
|localeList|语言列表|object| -- | 是 |
|onChange|输入框的change的钩子函数|fun| object | 否 |
|isTextarea|是否textarea，默认false|bool| -- | 否 |
|modalLocale|模态框中title、按钮的文字语态|object| -- | 否 |
|inputId|input的唯一值|string| -- | 和 form相关联 |
|form|this.props.form| object | -- | 和 inputId 相关联 |

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/ac-input-locale
$ cd ac-input-locale
$ npm install
$ npm run dev
```

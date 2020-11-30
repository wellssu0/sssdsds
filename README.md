## 目录结构

```scss
├── LICENSE
├── README.md
├── package.json
├── commitlint.config.js    		   # git commit提交配置
├── postcss.config.js
├── tsconfig.json								   # ts 配置
├── tsconfig.webpack.json
├── templateconfig.json            # 新建文件的模版配置
├── theme.js										   # 自定义主题的变量会在styleRules里面打包替换掉原来的的变量
├── build												   # *webpack打包配置*
│   ├── cleanup-folder.js           # 清空dist文件夹
│   ├── config.js								    # dev配置
│   ├── constants.js                # 打包用的常量定义
│   ├── custom-plugins.js           # 自定义插件(打印编译过程的信息)
│   ├── env.json								    # env的url配置
│   ├── plugins.js							    # webpack 插件
│   ├── rules										    # webpack5 打包规则
│   │   ├── fileRules.js              # 文件配置
│   │   ├── jsRules.js                # js,ts配置
│   │   ├── loaders.js                # 缓存,打包线程配置
│   │   └── styleRules.js             # styleLoader配置
│   ├── tpl
│   │   └── index.html       		    # html模版文件
│   ├── utils.js
│   └── webpack.config.js				    # webpack配置
├── src
│   ├── assets									    # 静态资源文件夹
│   │   ├── images
│   │   │   ├── logo.png
│   │   │   └── react.png
│   │   └── svg
│   │       └── react.svg
│   ├── components								   # 全局组件文件夹
│   │   ├── AutoSizer.tsx					   # 界面大小自适应
│   │   ├── Error
│   │   │   ├── index.scss
│   │   │   ├── index.scss.d.ts
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   └── PageLoading					     # loading
│   │       ├── index.scss
│   │       ├── index.scss.d.ts
│   │       └── index.tsx
│   ├── constants                    # 常量/枚举
│   │   └── index.ts
│   ├── containers									 #布局和页面
│   │   ├── shared
│   │   │   ├── App
│   │   │   │   ├── IntlWrapper.tsx
│   │   │   │   ├── Provider.tsx
│   │   │   │   ├── index.scss
│   │   │   │   ├── index.scss.d.ts
│   │   │   │   └── index.tsx
│   │   │   ├── NotAuthRouteComponent
│   │   │   │   └── index.tsx
│   │   │   └── PrivateRoute
│   │   │       └── index.tsx
│   │   └── views												#页面
│   │       ├── Home
│   │       │   ├── Header
│   │       │   │   ├── index.scss
│   │       │   │   ├── index.scss.d.ts
│   │       │   │   └── index.tsx
│   │       │   ├── Sider
│   │       │   │   ├── Menu.tsx
│   │       │   │   ├── index.scss
│   │       │   │   ├── index.scss.d.ts
│   │       │   │   └── index.tsx
│   │       │   ├── index.scss
│   │       │   ├── index.scss.d.ts
│   │       │   ├── index.tsx
│   │       │   └── menu.tsx
│   │       ├── Login
│   │       │   ├── index.scss
│   │       │   ├── index.scss.d.ts
│   │       │   └── index.tsx
│   │       └── Users
│   │           ├── Header
│   │           │   ├── index.scss
│   │           │   ├── index.scss.d.ts
│   │           │   └── index.tsx
│   │           ├── UserModal.tsx
│   │           ├── UserTable.tsx
│   │           ├── index.scss
│   │           ├── index.scss.d.ts
│   │           └── index.tsx
│   ├── errorHandler.ts                 # 错误处理（断网啥的...）
│   ├── index.scss
│   ├── index.scss.d.ts
│   ├── index.tsx											  # 入口
│		├── setupTests.ts
│   ├── locales												  # 国际化文件夹
│   │   ├── en_US.json
│   │   ├── loader.ts
│   │   └── zh_CN.json

│   ├── store													  # mobX
│   │   ├── authStore								   	# 用户信息和token
│   │   │   ├── index.ts
│   │   │   ├── syncAuthToken.ts
│   │   │   ├── syncUserInfo.ts
│   │   │   └── type.d.ts
│   │   ├── globalStore								  # 全局配置（语言、主题...）
│   │   │   ├── index.ts
│   │   │   └── type.d.ts
│   │   ├── index.ts
│   │   ├── useRootStore.ts
│   │   └── userStore
│   │       ├── index.ts
│   │       └── type.d.ts
│   ├── styles										    # 全局样式
│   │   ├── _base.scss
│   │   └── _var.scss
│   ├── sw.ts											    # Service Worker
│   └── utils											    # 工具文件夹
│       ├── api.ts								    # 接口目录
│       ├── hooks.ts							    # hooks
│       ├── index.ts
│       └── request.ts						    # 封装axios
├── tool															# 快捷模版
│   └── template
│       ├── TemplateName.scss.txt
│       └── TemplateName.tsx.txt
└── typings													  # 全局定义类型
    ├── assets.d.ts
    ├── attr.d.ts
    ├── global.d.ts
    └── store.d.ts

```

## characteristics

使用的是 React17、MobX6、TypeScript4、Webpack5、Sass、Lodash、Axios 、Antd

- use [ant design](https://ant.design/index-cn) as UI framework

- import .(s)css auto generate .(s)css.d.ts by [typed-css-modules-webpack-plugin](https://github.com/dropbox/typed-css-modules-webpack-plugin)

- use ServiceWorker by [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)

- import svg icon as a component by `@svgr/webpack`, [there is an example in the doc of steamer-react-redux-ts](https://github.com/YDJ-FE/steamer-react-ts/blob/master/docs/svg.md)

  ```

  ```

- 使用 `npm run add `命令，组件模版生成新的空组件文件

- 使用 husky{pre-commit/commit-msg} hooks 做 gitcommit 校验

- 使用 [react-intl-universal](https://github.com/alibaba/react-intl-universal)做 i18n.

- 使用 [react-virtualized](https://github.com/bvaughn/react-virtualized) 处理大列表


## 组件示例

```jsx
import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';

import useRootStore from '@store/useRootStore';

function Test() {
  const { routerStore } = useRootStore();

  const gotoHome = () => {
    routerStore.push('/');
  };
  return (
    <Button type="primary" onClick={gotoHome}>
      go to page index directly
    </Button>
  );
}

export default observer(Test);
```

[live example](https://github.com/YDJ-FE/ts-react-webpack4/blob/master/src/containers/views/Login/index.tsx?1532570619900)

## 使用 vscode 必要的插件

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 上传到服务器

```bash
#!/bin/bash

TIMESPAN=$(date '+%s')
DEPLOYNAME=ts-react-webpack.qa.${TIMESPAN}
DEPLOYFILES=${DEPLOYNAME}.tar.gz
SERVER=0.0.0.0

# make compression
cd dist/qa
tar -zcvf ${DEPLOYFILES} ./*

# upload
scp -P 22 -o StrictHostKeyChecking=no ${DEPLOYFILES} node@${SERVER}:/home/pages/ts-react-webpack/tarfiles

# make decompression
ssh -p 22 -o StrictHostKeyChecking=no node@${SERVER} tar xzf /home/pages/ts-react-webpack/tarfiles/${DEPLOYFILES} -C /home/pages/ts-react-webpack

if [ $? -ne 0 ]; then
    echo "success"
else
    echo "fail"
fi
```

## 发布到 NGINX

```nginx
server {
       listen       9993;
       server_name  localhost:9993;

       location / {
             root   ~/Documents/react/ts-react-webpack/dist/qa/;
             index  index.html index.htm;
       }
 }
```

## the scaffold

[steamer-react-redux-ts](https://github.com/YDJ-FE/steamer-react-redux-ts)

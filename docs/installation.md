# Installation

## Direct Download / CDN

https://unpkg.com/p11ntest/dist/p11ntest 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/p11ntest@{{ $version }}/dist/p11ntest.js
 
Include p11ntest after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/p11ntest/dist/p11ntest.js"></script>
```

## NPM

```sh
$ npm install p11ntest
```

## Yarn

```sh
$ yarn add p11ntest
```

When used with a module system, you must explicitly install the `p11ntest` via `Vue.use()`:

```javascript
import Vue from 'vue'
import p11ntest from 'p11ntest'

Vue.use(p11ntest)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `p11ntest` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//p11ntest.git node_modules/p11ntest
$ cd node_modules/p11ntest
$ npm install
$ npm run build
```


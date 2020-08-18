# ToyReact


```
npx webpack
```

--> dist/main.js


```
mode: 'development',
optimization: {
  minimize: false
}
```

```
npx webpack
```

--> dist/main.js


npm install --save-dev babel-loader @babel/core @babel/preset-env

```json
    module: {
        rules: [
            {
                test: '\.js$',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
```


main.html
```html
<script src='main.js'></script>
```

main.js

```js
for(let i of [1,2,3]){
    console.log(i)
}

let a = <div />
```


npm install --save-dev @babel/plugin-transform-react-jsx

```json
    module: {
        rules: [
            {
                test: '\.js$',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx']
                    }
                }
            }
        ]
    },
```

```
main.js:6 Uncaught ReferenceError: React is not defined
    at eval (main.js:6)
    at Object../main.js (main.js:96)
    at __webpack_require__ (main.js:20)
    at main.js:84
    at main.js:87
```

```json
    module: {
        rules: [
            {
                test: '\.js$',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
```

```js
function createElement(tagName, attributes, ...children){
  return document.createElement(tagName);
}

let a = <div id="a" class="c">
    <div></div>
    <div></div>
    <div></div>
</div>
```

```js

function createElement(tagName, attributes, ...children){
  let e = document.createElement(tagName);
  for (let p in attributes){
      e.setAttribute(p, attributes[p]);
  }
  for (let child of children){
      if (typeof child === 'string') {
          child = document.createTextNode(child);
      }
      e.appendChild(child);
  }
  return e;
}

window.a = <div id="a" class="c">
    <div></div>
    <div></div>
    <div></div>
</div>

```

document.body.appendChild(a)

main.html
```html

<body></body>
<script src='main.js'></script>
```


```js
document.body.appendChild(<MyComponent id="a" class="c">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</MyComponent>)
```


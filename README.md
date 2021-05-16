<div align="center">
  <a href="http://bekky.uz" target="_blank"> <img src="https://bekky.uz/framevuerk.png" height="200"/> </a>
  <h1><b> Bek </b></h1>
  <p><b>Fast</b>, <b>Responsive</b>, <b>Without Dependencies</b>, <b>Both Direction Support</b> and <b>Configurable</b> UI Framework based on <a href="http://vuejs.org" target="_blank">Vue.js</a>.</p>
  <!-- <img src="https://img.shields.io/github/license/framevuerk/framevuerk.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/stars/framevuerk/framevuerk.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/framevuerk/framevuerk.svg?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/framevuerk/framevuerk.svg?style=for-the-badge" />
  <img src="https://img.shields.io/npm/dm/framevuerk.svg?style=for-the-badge">
  <img src="https://img.shields.io/npm/v/framevuerk.svg?style=for-the-badge"> -->
  <img src="https://img.shields.io/github/issues/otabekoff/bek?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/otabekoff/bek?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/otabekoff/bek?style=for-the-badge">
  <img src="https://img.shields.io/github/license/otabekoff/bek?style=for-the-badge">
  <img src=""   >
  <br>
</div>

## Setup
First of all, you should install <b>Bek</b> and of course <b>Vue</b> from terminal and just follow the example and use it!

```terminal
npm i vue
npm i bek
```

And put these on your main script: (Also <i>commonjs</i> syntax and <i>require</i> is available.)

```javascript
// Vue package
import Vue from 'vue'
// Bek main script
import Bek from 'bek/dist/bek.js'
// Bek main style
// Also you can include this via <link rel="stylesheet"> in your template
import 'bek/dist/bek.css'
// Activate
Vue.use(Bek)
// Initializing App
new Vue({
    el: '#app'
})
```

Finally you need to create your template just like this.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Awesome App</title>
    <link rel="stylesheet" href="path/to/your/app.css">
</head>
<body>
    <bekMain id="app">
        <!-- Your App goes here -->
    </bekMain>
  <script src="path/to/your/app.js"></script>
</body>
</html>
```

## Customize

Bek can have different language, direction, and colors based on the user's taste. To setup your custom version, you should install **bek-builder** package.

```terminal
npm i bek-builder -D
```

And your config or list of configs array in `.json` file. (Also you can deliver same content via `.js` file and `module.exports` format)


```json
{
    "config-name": "foobar",
    "direction": "ltr",
    "primary-color": "#41b883",
    "secondary-color": "#35485d",
    "danger-color": "#dd4b39",
    "warning-color": "#ef8f00",
    "info-color": "#14b0cf",
    "bg-color": "#fff",
    "header-bg-color": "#35485d",
    "sidebar-bg-color": "#3a3a3a",
    "footer-bg-color": "#3a3a3a",
    "padding": "1em",
    "transition-speed": "0.35s",
    "border-radius": "2px",
    "shadow-size": "1px"
}
```

Finally you can build bek by this cli command. Don't forgot to put your builder command to your `build` or `postinstall` scripts. Note that use **./node_modules/.bin/bek-builder** instead of **bek-builder** if you run this command manually in terminal

```terminal
bek-builder -d "path/to/bek/source/dir" -o "path/to/receive/builded/files" -c "path/to/config/file"

# --dir, -d         path to bek source folder. default: "./node_modules/bek"
# --output-dir, -o  path to output files. default: "./node_modules/bek/dist"
# --config, -c      path to config file. used default config if not set.
```

And output files goes to *--output-dir* directory:

- bek-foobar.js
- bek-foobar.min.js
- bek-foobar.css
- bek-foobar.min.css
    
You are now config your app to use `Bek`! Let's go to use our components:
[Full Documention and Demo](http://bekky.uz)

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

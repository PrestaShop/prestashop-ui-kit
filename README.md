# PrestaShop UI Kit

UI Kit integration for PrestaShop – Based on Bootstrap 4.

**[prestashop-ui-kit](http://build.prestashop.com/prestashop-ui-kit/)**

## Installation

> Note: If you use PrestaShop, there's no need to install – the UI kit is already installed in PrestaShop.

You can install the UI kit on your project, independently from PrestaShop, using NPM.

```
npm install --save-dev prestakit
```

Or use it directly through our CDN:

```
[...]
<link href="https://ui-kit.prestashop.com/backoffice/latest/css/bootstrap-prestashop-ui-kit.css" rel="stylesheet">
<script src="https://ui-kit.prestashop.com/backoffice/latest/js/prestashop-ui-kit.js"></script>
[...]
```

### Get Started

Include the dependencies: jQuery and Bootstrap PrestaShop UI Kit + Javascript.

```
[...]
<link href="dist/css/bootstrap-prestashop-ui-kit.css" rel="stylesheet">
<script src="dist/js/prestashop-ui-kit.js"></script>
[...]
```

Github dev Dependencies

**[pstagger](https://github.com/PrestaShop/pstagger)**

## Contributing / Improving the UI Kit

Contributions are welcome!

You can check out an example of most of the included controls [in this page](/index.html). Check out a [live example here](https://cdn.rawgit.com/PrestaShop/prestashop-ui-kit/master/index.html).

## Developing with PrestaShop

You can develop on your local copy of the UI kit and see how the changes work on PrestaShop.
Assuming you already have a local copy of PrestaShop and of the UI kit installed on your computer (each on its own directory), here's what you need to do.

Open up `admin-dev/themes/new-theme/package.json` of your PrestaShop install, and look for "prestakit"

```js
{
  // ...
  prestakit: "1.2.2";
  // ...
}
```

Change the version so it looks like this:

```js
{
  prestakit: "/path/to/your/local/ui-kit";
}
```

Go back to to your UI kit folder and run

```bash
npm run watch
```

In another console, go to `admin-dev/themes/new-theme/` of your PrestaShop install, and run:

```bash
npm install && npm run watch
```

If you keep both instances of NPM running, all your changes in the UI kit will be built automatically, as will your PrestaShop assets.

## About PrestaShop

PrestaShop is a free and Open Source e-commerce web application written in PHP, committed to providing the best shopping cart experience for both merchants and customers. [Learn more about PrestaShop](http://www.prestashop.com)

## License

This UI Kit is released under the [OSL-3.0 License](https://opensource.org/licenses/OSL-3.0).

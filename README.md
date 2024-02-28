# HTML to JSX Converter Library

This is a simple JavaScript library for converting HTML to JSX and vice versa. It can be used in both browser and Node.js environments.

## Installation

You can include this library in your HTML file using the following CDN link:

```html
<script src="https://cdn.jsdelivr.net/gh/SopKit/html-jsx-converter@main/html-jsx-converter.js"></script>
```

Or install via npm:

```bash
npm install html-jsx-converter
```

## Usage

### Browser

#### Convert HTML to JSX

```javascript
const htmlInput = '<div class="container"><h1>Hello, World!</h1></div>';
const jsxOutput = HtmlToJSX(htmlInput);

console.log(jsxOutput);
// Output: <div className="container"><h1>Hello, World!</h1></div>
```

#### Convert JSX to HTML

```javascript
const jsxInput = '<div className="container"><h1>Hello, World!</h1></div>';
const htmlOutput = JSXtoHTML(jsxInput);

console.log(htmlOutput);
// Output: <div class="container"><h1>Hello, World!</h1></div>
```

### Node.js

#### Convert HTML to JSX

```javascript
const { htmlToJSX } = require('html-jsx-converter');

const htmlInput = '<div class="container"><h1>Hello, World!</h1></div>';
const jsxOutput = htmlToJSX(htmlInput);

console.log(jsxOutput);
// Output: <div className="container"><h1>Hello, World!</h1></div>
```

#### Convert JSX to HTML

```javascript
const { JSXtoHTML } = require('html-jsx-converter');

const jsxInput = '<div className="container"><h1>Hello, World!</h1></div>';
const htmlOutput = JSXtoHTML(jsxInput);

console.log(htmlOutput);
// Output: <div class="container"><h1>Hello, World!</h1></div>
```

## API Reference

### `htmlToJSX(htmlString)`

Converts HTML to JSX format.

- `htmlString`: The input HTML string.

Returns: The converted JSX string.

### `JSXtoHTML(jsxString)`

Converts JSX to HTML format.

- `jsxString`: The input JSX string.

Returns: The converted HTML string.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.post('/convert', (req, res) => {
    const htmlInput = req.body;
    
    // Basic conversion, you may need to expand this for more complex HTML
    const jsxOutput = htmlInput
        .replace(/class=/g, 'className=') // Convert class to className
        .replace(/for=/g, 'htmlFor=') // Convert for to htmlFor
        .replace(/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/ig, (match, tagName, attrs, content) => {
            // Convert HTML tag to JSX
            const attributes = (attrs || '')
                .replace(/(\w+)=["']([^"']+)["']/g, '$1={"$2"}') // Convert attributes to JSX format
                .replace(/className=/g, 'class=') // Convert back className to class

            if (content) {
                return `<${tagName}${attributes}>${content}</${tagName}>`;
            } else {
                return `<${tagName}${attributes} />`;
            }
        });

    res.send(jsxOutput);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

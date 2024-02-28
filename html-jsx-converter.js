function htmlToJSX(inputData) {
    // Basic conversion, you may need to expand this for more complex HTML
    const jsxOutput = inputData
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

    // Wrap in <> and </>
    return `<>{${jsxOutput}}</>`;
}

function JSXtoHTML(inputData) {
    const htmlOutput = inputData
        .replace(/className=/g, 'class=') // Convert className to class
        .replace(/htmlFor=/g, 'for=') // Convert htmlFor to for
        .replace(/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/ig, (match, tagName, attrs, content) => {
            // Convert JSX tag to HTML
            const attributes = (attrs || '')
                .replace(/(\w+)=\{"([^"]+)"\}/g, '$1="$2"') // Convert attributes back to HTML format

            if (content) {
                return `<${tagName}${attributes}>${content}</${tagName}>`;
            } else {
                return `<${tagName}${attributes} />`;
            }
        });

    return htmlOutput;
}


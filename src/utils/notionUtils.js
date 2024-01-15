const snakeCase = require('lodash/snakecase');

const parseNotionTextProperty = text => {
    let annotationStartMarkup = '';
    let annotationEndMarkup = '';

    if (text.annotations.bold) {
        annotationStartMarkup += '<strong>';
        annotationEndMarkup += '</strong>';
    }

    if (text.annotations.italic) {
        annotationStartMarkup += '<em>';
        annotationEndMarkup += '</em>';
    }

    if (text.annotations.strikethrough) {
        annotationStartMarkup += '<del>';
        annotationEndMarkup += '</del>';
    }

    if (text.annotations.underline) {
        annotationStartMarkup += '<u>';
        annotationEndMarkup += '</u>';
    }

    if (text.annotations.code) {
        annotationStartMarkup += '<code>';
        annotationEndMarkup += '</code>';
    }

    return `${annotationStartMarkup}${text.text.content}${annotationEndMarkup}`;
};

const parseNotionProperty = property => {
    switch (property.type) {
        case 'number':
            return property.number;
        case 'title':
            return property.title[0].plain_text;
        case 'rich_text':
            return property.rich_text.map(parseNotionProperty).join('');
        case 'text':
            return parseNotionTextProperty(property);
        case 'select':
            return property.select?.name;
        case 'multi_select':
            return property.multi_select.map(({ name }) => name);
        case 'status':
            return property.status.name;
        case 'checkbox':
            return property.checkbox;
        default:
            return property;
    }
};

const parseNotionPage = page => {
    const { id, properties } = page;

    const parsedProperties = Object.entries(properties).reduce(
        (acc, [key, value]) => {
            acc[snakeCase(key)] = parseNotionProperty(value);
            return acc;
        },
        {}
    );

    return {
        id,
        properties: parsedProperties,
    };
};

module.exports = {
    parseNotionPage,
};

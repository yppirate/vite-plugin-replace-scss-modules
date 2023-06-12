const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

function scssReplacePlugin() {
  return {
    name: 'scss-replace',
    transform(code, id) {
      if (id.endsWith('.scss')) {
        const filePath = resolve(id);
        const fileContent = readFileSync(filePath, 'utf-8');
        const replacedContent = fileContent.replace(/module/g, '__');

        if (replacedContent !== fileContent) {
          writeFileSync(filePath, replacedContent, 'utf-8');
        }

        return {
          code,
          map: null,
        };
      }
    },
  };
}

module.exports = scssReplacePlugin;

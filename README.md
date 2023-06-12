# Vite SCSS Replace Plugin

This is a Vite plugin that allows you to search for a specific string in SCSS files and replace it with another string during the build process. It can be useful when you need to perform a bulk search and replace operation in your SCSS codebase.

The plugin scans all SCSS files in your Vite project and replaces occurrences of the specified string with the replacement string. It leverages the power of regular expressions to perform the search and replace operation efficiently.

**Features:**

-   Searches for a specific string in SCSS files and replaces it with another string.
-   Works with Vite, the fast and efficient development build tool.
-   Supports bulk search and replace operation across multiple SCSS files.
-   Automatically saves the modified SCSS files during the build process.

**Usage:**

1.  Install the plugin as a development dependency in your Vite project:

 `npm install --save-dev vite-plugin-scss-replace` 
    
 2. Create a `vite.config.js` file in your project's root directory (if it doesn't exist already).
    
3.  Import and register the plugin in your `vite.config.js` file:
     
```javascript
const scssReplacePlugin = require('vite-plugin-scss-replace');
    
  module.exports = {
    plugins: [
      scssReplacePlugin(),
   ],
};` 
```
4.   Customize the search and replace strings in the plugin code. By default, it searches for the string "module" and replaces it with "__". Modify the regular expression pattern in the `transform` function of the `vite-plugin-scss-replace.js` file to suit your needs.
 
 The plugin will automatically scan and modify the SCSS files during the build process.
 
**Note:** Make sure to adjust the search and replace patterns in the plugin code to match your specific requirements.

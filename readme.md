# xAPIWrapper + Node + Jasmine boilerplate

* https://github.com/adlnet/xAPIWrapper
* http://jasmine.github.io

Node testing using Jasmine's [node.js](http://jasmine.github.io/2.0/node.html)

## Requirements

Jasmine >= 2.0

Problem: xAPIWrapper.js namespaces into the window object:

 *  [jsdom module](https://github.com/tmpvar/jsdom), @see [howto](https://github.com/tmpvar/jsdom#creating-a-browser-like-window-object)

Note: Jsdom needs to be <4.0 (dropped node.js support in favour of io.js in later versions)

See `/spec/helpers/headers.js` for implementation. Jasmine prepends this file on each spec file.

Install
-------

```!bash
cd ~/project_root
bower install
npm install #fellow linux users may need to use sudo
node_modules/.bin/jasmine
```

* rename and move `/template.jasmine.json` to `/spec/support/jasmine.json`
* place your spec and helper files in `spec` folder. If neccessary amend `jasmine.json`

# xAPIWrapper + Node + Jasmine boilerplate

* https://github.com/adlnet/xAPIWrapper
* http://jasmine.github.io

Node testing using Jasmine's [node.js](http://jasmine.github.io/2.0/node.html)

## Requirements

Jasmine >= 2.0
xAPIWrapper namespaces into the window object:

 * `jsdom` [module](https://github.com/tmpvar/jsdom), @see [howto](https://github.com/tmpvar/jsdom#creating-a-browser-like-window-object)


```
$ npm install -g jasmine
$ cd ~/project_root
$ npm install jsdom #note: install -g hangs on *NIX due to some weird perm issues
$ git clone https://github.com/adlnet/xAPIWrapper.git
$ jasmine init
$ jasmine
```

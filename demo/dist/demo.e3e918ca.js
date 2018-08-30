// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../src/toggle-pesticide.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var togglePesticide = exports.togglePesticide = function togglePesticide(context) {

  console.log(document.getElementsByClassName('panel'));
  console.log(document.getElementsByClassName('panel'));

  // Create the namespace if it's not created yet.
  if (!context.PESTICIDE) context.PESTICIDE = { isDebugging: false };

  // Color table (tag name and hexadecimal value).
  var COLOR_TABLE = {
    'body': '#2980b9',
    'article': '#3498db',
    'nav': '#0088c3',
    'aside': '#33a0ce',
    'section': '#66b8da',
    'header': '#99cfe7',
    'footer': '#cce7f3',
    'h1': '#162544',
    'h2': '#314e6e',
    'h3': '#3e5e85',
    'h4': '#449baf',
    'h5': '#c7d1cb',
    'h6': '#4371d0',
    'main': '#2f4f90',
    'address': '#1a2c51',
    'div': '#036cdb',
    'p': '#ac050b',
    'hr': '#ff063f',
    'pre': '#850440',
    'blockquote': '#f1b8e7',
    'ol': '#ff050c',
    'ul': '#d90416',
    'li': '#d90416',
    'dl': '#fd3427',
    'dt': '#ff0043',
    'dd': '#e80174',
    'figure': '#ff00bb',
    'figcaption': '#bf0032',
    'table': '#00cc99',
    'caption': '#37ffc4',
    'thead': '#98daca',
    'tbody': '#64a7a0',
    'tfoot': '#22746b',
    'tr': '#86c0b2',
    'th': '#a1e7d6',
    'td': '#3f5a54',
    'col': '#6c9a8f',
    'colgroup': '#6c9a9d',
    'button': '#da8301',
    'datalist': '#c06000',
    'fieldset': '#d95100',
    'form': '#d23600',
    'input': '#fca600',
    'keygen': '#b31e00',
    'label': '#ee8900',
    'legend': '#de6d00',
    'meter': '#e8630c',
    'optgroup': '#b33600',
    'option': '#ff8a00',
    'output': '#ff9619',
    'progress': '#e57c00',
    'select': '#e26e0f',
    'textarea': '#cc5400',
    'details': '#33848f',
    'summary': '#60a1a6',
    'command': '#438da1',
    'menu': '#449da6',
    'del': '#bf0000',
    'ins': '#400000',
    'img': '#22746b',
    'iframe': '#64a7a0',
    'embed': '#98daca',
    'object': '#00cc99',
    'param': '#37ffc4',
    'video': '#6ee866',
    'audio': '#027353',
    'source': '#012426',
    'canvas': '#a2f570',
    'track': '#59a600',
    'map': '#7be500',
    'area': '#305900',
    'a': '#ff62ab',
    'em': '#800b41',
    'strong': '#ff1583',
    'i': '#803156',
    'b': '#cc1169',
    'u': '#ff0430',
    's': '#f805e3',
    'small': '#d107b2',
    'abbr': '#4a0263',
    'q': '#240018',
    'cite': '#64003c',
    'dfn': '#b4005a',
    'sub': '#dba0c8',
    'sup': '#cc0256',
    'time': '#d6606d',
    'code': '#e04251',
    'kbd': '#5e001f',
    'samp': '#9c0033',
    'var': '#d90047',
    'mark': '#ff0053',
    'bdi': '#bf3668',
    'bdo': '#6f1400',
    'ruby': '#ff7b93',
    'rt': '#ff2f54',
    'rp': '#803e49',
    'span': '#cc2643',
    'br': '#db687d',
    'wbr': '#db175b'
  },

  // All body elements.
  count = 0,
      item,
      itemBorderColor,
      isDebugging = context.PESTICIDE.isDebugging;

  console.log(document.getElementsByTagName('body')[0]);
  var all = document.body.getElementsByTagName('*');

  for (; count < all.length; ++count) {
    item = all[count];
    // Color fallback is 'red'.
    itemBorderColor = COLOR_TABLE[item.tagName.toLowerCase()] || 'red';
    // Apply the outline color to the element. If it's not in debug mode, it'll apply a transparent outline.
    item.style.outline = '1px solid ' + (!isDebugging ? itemBorderColor : 'transparent');
  }

  // Toggle debugging flag.
  // context.PESTICIDE.isDebugging = !isDebugging;
};
},{}],"../src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PesticideToggler = undefined;

var _togglePesticide = require("./toggle-pesticide");

var PesticideToggler = exports.PesticideToggler = {
  activate: function activate() {
    (0, _togglePesticide.togglePesticide)(window);

    window.onkeypress = function (event) {
      if (event.code === 'KeyP') {
        window.PESTICIDE.isDebugging = !window.PESTICIDE.isDebugging;
        (0, _togglePesticide.togglePesticide)(window);
      }
    };
  }
};
},{"./toggle-pesticide":"../src/toggle-pesticide.js"}],"index.js":[function(require,module,exports) {
'use strict';

var _index = require('../src/index');

window.onload = function () {
  _index.PesticideToggler.activate();
};
},{"../src/index":"../src/index.js"}],"../../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '44585' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/demo.e3e918ca.map
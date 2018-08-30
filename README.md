# Pesticide Toggler

Toggles the pesticide CSS Debugger. By default the toggling button is `P`


## Instruction

First import the `PesticideToggler` from the node_modules. Then activate it in either window.onload function or any where the `document.body` becomes available.

```

import {PesticideToggler} from 'pesticide-toggler';

window.onload = function() {
  PesticideToggler.activate();
}

```
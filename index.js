import { togglePesticide } from "./src/toggle-pesticide";

export const PesticideToggler = {
  activate: () => {
    if (!window.PESTICIDE) window.PESTICIDE = { isDebugging: true };

    window.onkeypress = function (event) {
      if (event.code === 'KeyP') {
        window.PESTICIDE.isDebugging = !window.PESTICIDE.isDebugging;
        togglePesticide(window);
      }
    }

  }
} 
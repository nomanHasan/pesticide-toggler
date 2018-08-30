import { togglePesticide } from "./toggle-pesticide";

export const PesticideToggler = {
  activate: () => {
    togglePesticide(window)

    window.onkeypress = function (event) {
      if (event.code === 'KeyP') {
        window.PESTICIDE.isDebugging = !window.PESTICIDE.isDebugging;
        togglePesticide(window);
      }
    }

  }
} 
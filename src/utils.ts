function clickHandler() {
   window.removeEventListener("click", clickHandler);
}

/**
 * Block click
 */
function blockClick() {
   window.addEventListener("click", clickHandler);
}

export const colors: string[][] = [["#5e60cc", "#9e94c7"]];

/**
 * Infinite sequence generator.
 */
export function* newNumber() {
   let i = 1;
   while (true) {
      yield i++;
   }
}

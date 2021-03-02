import checkWin from "./checkWin";

const addFlag = (square: HTMLDivElement, isGameOver: boolean, flags: number, bombAmount: number, matches: number, squares: any[]) => {
  if (isGameOver) return;
  if (!square.classList.contains("checked") && flags < bombAmount) {
    if (!square.classList.contains("flag")) {
      square.classList.add("flag");
      square.innerHTML = "&#9971";
      flags++;
      checkWin(squares, matches, bombAmount);
    } else {
      square.classList.remove("flag");
      square.innerHTML = "";
      flags--;
      checkWin(squares, matches, bombAmount);
    }
  }
};

export default addFlag;
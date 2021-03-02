import checkSquare from "./checkSquare";
// import gameOver from "./gameOver";

const clickSquare = (square: HTMLDivElement, squares: any[], width: number, isGameOver: boolean) => {
  let currentId = parseInt(square.id);
  if (isGameOver || square.classList.contains("flag")) return;
  if (square.classList.contains("bomb")) {
    // gameOver(isGameOver, squares);
  } else {
    let total: number = Number(square.getAttribute("data"));
    
    if (total !== 0) {
      square.classList.add("checked");
      square.innerHTML = `${total}`;
      return;
    }
    square.classList.add("checked");
    checkSquare(squares, isGameOver, square, width, currentId);
    return;
  }
};

export default clickSquare;
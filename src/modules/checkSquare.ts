import clickSquare from "./clickSquare";

const checkSquare = (squares: any[], isGameOver:boolean, square: HTMLDivElement, width: number, currentId: number) => {
  const isLeftEdge = currentId % width === 0;
  const isRightEdge = currentId % width === width - 1;

  setTimeout(() => {
    if (currentId > 0 && !isLeftEdge) {
      const newId = squares[currentId - 1].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId > 9 && !isRightEdge) {
      const newId = squares[currentId + 1 - width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId > 10) {
      const newId = squares[currentId - width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId > 11 && !isLeftEdge) {
      const newId = squares[currentId - 1 - width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId < 98 && !isRightEdge) {
      const newId = squares[currentId + 1].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId < 90 && !isLeftEdge) {
      const newId = squares[currentId - 1 + width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId < 88 && !isRightEdge) {
      const newId = squares[currentId + 1 + width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
    if (currentId < 89) {
      const newId = squares[currentId + width].id;
      const newSquare = document.getElementById(newId) as HTMLDivElement;
      clickSquare(newSquare, squares, width, isGameOver);
    }
  }, 10);
};

export default checkSquare;
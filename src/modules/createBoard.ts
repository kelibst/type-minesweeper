import addFlag from "./addFlag";
import clickSquare from "./clickSquare";

const createBoard = (width: number, grid: HTMLDivElement, squares: any[], bombAmount: number, isGameOver: boolean, flags: number, matches: number) => {
  const bombsArr = Array.from({ length: bombAmount }, i => 'bomb')
  const emptyArr = Array(width * width - bombAmount).fill("valid");
  const gameArr = [...emptyArr, ...bombsArr];
  const shufArr = gameArr.sort(() => Math.random() - 0.5);
  let flagAdd = document.querySelector('.flag-add') as HTMLDivElement;

  flagAdd.addEventListener('click', () => {
    flagAdd.classList.contains('active') ? flagAdd.classList.remove('active') : flagAdd.classList.add('active');
  })

  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", `${i}`);
    square.classList.add(shufArr[i]);
    grid.appendChild(square);
    squares.push(square);

    let flagParams: [HTMLDivElement, boolean, number, number, number, any[]]
    flagParams = [square, isGameOver, flags, bombAmount, matches, squares]
    square.addEventListener("click", (e) =>
      flagAdd.classList.contains('active') ?  
      addFlag(...flagParams) :
      clickSquare(square, squares, width, isGameOver)
    );

  //   square.oncontextmenu = (e) => {
  //     e.preventDefault();
  //     addFlag(square, isGameOver, flags, bombAmount, matches, squares);
  //   };
  // }

  // validate(width, squares);
};

}
export default createBoard
import createBoard from "./modules/createBoard";

document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid') as HTMLDivElement;
    let width: number = 10
    let bombAmount = 20
    let squares: any[] = []
    let isGameOver: boolean = false;
    let flags: number = 0;
    let matches: number = 0;

    let paramsType: [
        number,
        HTMLDivElement,
        any[],
        number,
        boolean,
        number,
        number
      ];
    paramsType = [width, grid, squares, bombAmount, isGameOver, flags, matches]
      

    createBoard(...paramsType)
})
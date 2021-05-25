const validate = (width: number, squares: any[]) => {
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === 0;
  
      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb"))
          total++;
        if (
          i > 9 &&
          !isRightEdge &&
          squares[i + 1 - width].classList.contains("bomb")
        )
          total++;
        if (i > 10 && squares[i - width].classList.contains("bomb")) total++;
        if (
          i > 11 &&
          !isLeftEdge &&
          squares[i - 1 - width].classList.contains("bomb")
        )
          total++;
        if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("bomb"))
          total++;
        if (
          i < 90 &&
          !isLeftEdge &&
          squares[i - 1 + width].classList.contains("bomb")
        )
          total++;
        if (
          i < 88 &&
          !isRightEdge &&
          squares[i + 1 + width].classList.contains("bomb")
        )
          total++;
        if (i < 89 && squares[i + width].classList.contains("bomb")) total++;
  
        squares[i].setAttribute("data", total);
      }
    }
  };
  
  export default validate;
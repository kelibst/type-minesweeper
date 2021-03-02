const checkWin = (squares: any[], matches: number, bombAmount: number) => {
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains("flag") &&
        squares[i].classList.contains("bomb")
      ) {
        matches++;
      }
      if (matches === bombAmount) {
        let status = document.querySelector(".status") as HTMLDivElement;
        status.classList.add("success");
        status.innerHTML = "Wow! you won. Restarting Game!";
        setTimeout(() => {
          location.reload();
        }, 5000);
      }
    }
  };
  export default checkWin;
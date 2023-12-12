document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

const handleClick = (event) =>{
    let square = event.target
    let position = square.id
    
    if(handleMove(position)) {
        setTimeout(() => {
            alert(`O jogo acabou - O vencedor foi ${playertime}`)
        }, 10)  
    }
    updateSquare(position)
}

const updateSquare = (position) => {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class=${symbol}></div>`
}

const clickResetGame = () => {
    const button = document.getElementById('resetGame')
    button.addEventListener('click', () => {
        window.location.reload()
    })
}

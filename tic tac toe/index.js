let turno = false;


const handleClick = (event) =>{
    const {id}= event.target;
    const div = document.getElementById(id);

    div.innerText = turno ? "O" : "X";
};
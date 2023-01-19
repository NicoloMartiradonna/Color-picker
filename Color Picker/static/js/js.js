let box_col = document.querySelectorAll(".col")
let span = document.getElementById("span")

box_col.forEach(element => element.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = element.getAttribute("data-col")
    let pos = element.getBoundingClientRect()
    span.style.display = "block"
    span.style.top = `${pos.top}px`
    span.style.left = `${pos.left}px`
}))

//box col prende tutti gli elementi con classe col

//forEach va a prendere ogni elemento contenuto in box col e gli do un evento, dopo assegno a quest'ultimo -->
//una funzione e in questa funziomne vado a prednere il body e gli do il colore dell'attributo data col--->
//dopo in pos vado a prendere l'elemento e ottengo la posizione e dopo lo span ci do rendendolo visibile con display block-->
//essendo un elemento con position absolute do al top dello span il top dell'elemento box col e al left dello span il left di box col
//forEach sostituisce il for e element sarebbe la i e per ogni elemento ho questa funzione e la freccia semplifica termine funzione
//click è l'evento
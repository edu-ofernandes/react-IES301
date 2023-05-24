

// function exibirLetreiro() {
//     let frase = 'Venha estudar na Fatec.';
//     let fraseConcatenada = '';
//     let count = 0;

//     setInterval(() => {
//         if (fraseConcatenada.length === frase.length) {
//             fraseConcatenada = '';
//             count = 0;
//         }
        
//         fraseConcatenada = fraseConcatenada + frase[count];

//         count+=1;
//     }, 175);

// }
let frase = 'Venha estudar na Fatec.';
let fraseConcatenada = '';
let count = 0;  

// while (fraseConcatenada.length !== frase.length) {
//     // eslint-disable-next-line no-loop-func
//     setTimeout(()=> {
//         fraseConcatenada = fraseConcatenada + frase[count];

//         count+=1;

//     }, 500);
// }
setInterval(() => {
    if (fraseConcatenada.length === frase.length) {
        fraseConcatenada = '';
        count = 0;
    }
    
    fraseConcatenada = fraseConcatenada + frase[count];

    count+=1;
}, 1000);

export const Letreiro = () => {
    return (
        <h1>{fraseConcatenada}</h1>
    );
}
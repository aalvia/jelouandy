function calculateScore(arr) {
    let score = 0;

    // Recorre cada número en el arreglo
    for (let num of arr) {
        if (num === 5) {
            score += 5;
        } else if (num % 2 === 0) {
            score += 1;
        } else {
            score += 3;
        }
    }

    return score;
}

// Ejemplo de uso:
const example1 = [17, 19, 21];
const example2 = [5, 5, 5];
const example3 = [1,2,3,4,5];
console.log(`El puntaje total de [1,2,3,4,5] es: ${calculateScore(example3)}`); 
console.log(`El puntaje total de [17, 19, 21] es: ${calculateScore(example1)}`); // Salida esperada: 9
console.log(`El puntaje total de [5, 5, 5] es: ${calculateScore(example2)}`); // Salida esperada: 15


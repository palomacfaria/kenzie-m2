//*SINTAXE
//array.splice(start, deleteCount, item1, item2, ...);

/* START: Índice onde a modificação deve começar. Os elementos do array serão removidos ou adicionados a partir deste índice.

DELETECOUNT: Opcional. Número inteiro que determina quantos elementos devem ser removidos a partir do índice start. Se esse valor for 0, nenhum elemento será removido. Se não for fornecido, todos os elementos a partir do índice start serão removidos.

ITEM1, ITEM2, ...: Opcional. Elementos que devem ser adicionados ao array a partir do índice start. Se nenhum item for fornecido, apenas elementos serão removidos e nenhum novo elemento será adicionado. */

// Exemplo 1
const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2, 6, 7);

console.log(originalArray); // Output: [ 1, 6, 7, 4, 5 ]
console.log(removedElements); // Output: [ 2, 3 ]

// Exemplo 2
const originalArray2 = [ "Maria", "João", "Roberta", "Maurício" ];
const removedElement = originalArray2.splice(2, 1);

console.log(originalArray2); // Output: [ 'Maria', 'João', 'Maurício' ]
console.log(removedElement); // Output: [ 'Roberta' ]

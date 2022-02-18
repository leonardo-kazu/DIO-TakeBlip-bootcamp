function validaArray(arr, num) {
    try {
        if (validaArray.arguments.length == 0) throw new ReferenceError("Nenhum parametro enviado");

        if (typeof(arr) !== "object") {
            throw new TypeError("Não foi inserido um array");
        }
        if (typeof(num) !== "number") {
            throw new TypeError("Não foi passado um número");
        }
        if (arr.length != num) {
            throw new RangeError("Array de tamanho maior que o permitido");
        }
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Range Error!");
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Type Error!");
            console.log(e.stack);
        } else {
            console.log("Range Error!");
            console.log(e.stack);
        }
    }
}
validaArray([1,  2, 3], 3);
const num = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
function findMax(numbers) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        }return(max);
}
    console.log(findMax(num));
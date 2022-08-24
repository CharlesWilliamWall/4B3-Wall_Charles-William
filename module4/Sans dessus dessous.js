function reverseString(str) {
    const arrayStrings = str.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}
const result = reverseString("Javascript");
console.log(result)
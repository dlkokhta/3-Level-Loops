//1
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//2
// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

{
  /**do while loop 0 to 10 */
}
// let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

{
  /**for loop 10 to 0 */
}
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

{
  /**while loop 10 to 0 */
}
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

{
  /**do while loop 10 to 0 */
}
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

{
  /**Iterate 0 to n using for loop*/
}
// let n = 20;
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }
{
  /**Even Numbers*/
}
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

{
  /**Odd Numbers*/
}
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 1) console.log(i);
// }

{
  /** sum of all numbers*/
}
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

{
  /** sum of all even and odd numbers*/
}
// let evenNumber = 0;
// let oddNumber = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenNumber += i;
//   }
//   if (i % 2 === 1) {
//     oddNumber += i;
//   }
//   console.log(evenNumber);
//   console.log(oddNumber);
// }

{
  /** generate array of 5 random numbers*/
}
// let randomNumbers = [];

// for (let i = 0; i < 5; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 100));
// }
// console.log(randomNumbers);

{
  /** generates a random hexadecimal number*/
}
// const randomHexNumber = () => {
//   const letters = "0123456789ABCDEF";
//   let hashTag = "#";
//   for (let i = 0; i < 6; i++) {
//     hashTag += letters[Math.floor(Math.random() * 16)];
//   }
//   return hashTag;
// };
// const randomHex = randomHexNumber();
// console.log(randomHex);

{
  /** generates a random rgb color number*/
}
// const randomRGBColor = () => {
//   const RGB = [];

//   for (let i = 0; i < 3; i++) {
//     RGB.push(Math.floor(Math.random() * 256));
//   }
//   return `rgb(${RGB.join(", ")})`;
// };
// const randomRGB = randomRGBColor();
// console.log(randomRGB);

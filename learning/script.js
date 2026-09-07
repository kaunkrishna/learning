// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = (await x).json()
    console.log(x)
    return data
}

async function main() {
    console.log("hello world 1");
    console.log("hello world 2");
    console.log("hello world 3");

    let data = await getData()

    console.log("hello world 4");
}

main()
//Async, doesn't happen immediatley. below

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
        resolve('Done');
    }, 1500);
    });
   return promise;
};

setTimeout(() =>{
    console.log("Timer is done");
    fetchData(text => {
        console.log(text);
    })
}, 2000);

//Synchronous code below
console.log("Hello")

//example of promises and how they work.
setTimeout1(() =>{
    console.log("Timer is done");
    fetchData.then(text =>{
        console.log(text);
        return fetchData();

    })
    .then(text2 => {
         console.log(text2);
        return fetchData();

    })
}, 2000);
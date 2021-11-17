const converterPromise = (array) => {
    return new Promise ((resolve, reject) => {
        let arr=array.map(x => {
            if (typeof x !== 'string') {
                reject('Error: Not all elements are string type!');
            }
            return x.toString().toUpperCase();
        });
        if (arr) {
            resolve(arr);
        }
    })
};


export default converterPromise;



// export default converterPromise;

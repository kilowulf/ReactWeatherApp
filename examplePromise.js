
/*callback function will retrieve weather 
information based on location and pass it to the 
callback variable.*/

function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

/*callback will be called. location and function arguments,
 w/function taking to variables*/

getTempCallback('Provo', function (err, temp) {
    //error check with if statement
    if(err){
        console.log('error', err);
    } else {
        console.log('success', temp)
    }
});

// /*use of promises, utilizing two arguments,
//  resolve/success and reject/error*/

// // function getTempPromise (location) {
// //     return new Promise(function (resolve, reject) {
// //         //"setTimeout" delay response
// //         setTimeout(function() {
// //             resolve(79);
// //             reject('City not found');
// //         }, 1000);
        
// //     });
// // }

// //call promise. "then" method can execute reject/resolve

getTempPromise('Provo').then(function (temp) {
    console.log('promise success', temp);
    //error handler
}, function(err) {
    console.log('promise err', err);
});



/*Challenge- use addPromise as a function that takes two arguments*/


function addPromise(a, b) {
    
    return new Promise(function(resolve, reject) {
        if(typeof a === "number" && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A & B are not numbers')
        }       
        
    });    
}

addPromise(2, 5).then(function (sum) {
    
    console.log('Success', sum);
}, function(err) {
    console.log('Error', err);
});

addPromise('Dave', 5).then(function (sum) {
    
    console.log('this should not show up');
}, function(err) {
    console.log('This should appear', err);
});
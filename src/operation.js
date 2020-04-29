const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
    callback(new Error ("fwef"), city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}

function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
}


suite.only("operations")


function getCurrentCity(callback) {
    setTimeout(function () {
  
      const city = "New York, NY";
      callback(null, city);
  
    }, delayms)
  }

/*
Create a function with both success and error callbacks
and implement it on getCurrentCity
*/

function fetchCurrentCity(){

    const operation = {}
    
        getCurrentCity(function(error, result){
            if(error){
                 operation.onError(error)
                 return
            }
            operation.onSuccess(result)
        })
    
    operation.setCallbacks = function setCallbacks(onSuccess, onError) {
        operation.onSuccess = onSuccess;
        operation.onError = onError;
    }

    return operation;
 
}

// Testing the fetchCurrentCity to see if it takes two callbacks
// test("fetchCurrentCity with separate success and error callbacks", (done) => {
//     fetchCurrentCity(
//         result => done(),
//         error => done(error)
//     )

// })

test("fetchCurrentCity pass the callbacks later on", (done) => {

    const operation = fetchCurrentCity()
    operation.setCallbacks(
        result => done(),
        error => done(error)
    )

})

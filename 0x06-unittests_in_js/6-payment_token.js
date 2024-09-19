const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({ data: "Successful response from the API" });
  }
};

// getPaymentTokenFromAPI(true).then(result => {
//     console.log(result);
// })

module.exports = getPaymentTokenFromAPI;

export const addSpinner = (element) => {
    animateButton(element);
    animateButton(animateButton, 1000, element);
}

const animateButton = (element) => {
    element.classList.toggle("none");
    element.nextElementSibling.classList.toggle("block");
    element.nextElementSibling.classList.toggle("none");
};

/*const geoError = (errObj) => {
    const errMsg = errObj.message ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
};*/

export const displayError = (headerMsg, srMsg) => {
    updateWeatherLocationHeader(headerMsg);
    updateScreenReaderConfirmation(srMsg);
};
const updateWeatherLocationHeader = (message) => {
    const h1 = document.getElementById("currentForecast__location");
    h1.textContent = message;
};
export const updateScreenReaderConfirmation = (message) => {
    document.getElementById("confirmation").textContent = message;
};

// function for get input value by id
function getInputValueById(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// multiplication two lines and 0.5
function threeValueMultiply(firstValue, secondValue) {
    const area = 0.5 * firstValue * secondValue;
    const fixedArea = area.toFixed(2)
    return fixedArea;
}

// multiplication two lines
function twoValueMultiply(firstValue, secondValue) {
    const area = firstValue * secondValue;
    const fixedArea = area.toFixed(2)
    return fixedArea;
}


// validation and error message
function inputValidationAndSetResult(firstInputValue, secondInputValue, nameOfGeometry, isThreeValues) {
    if (isNaN(firstInputValue) || isNaN(secondInputValue) || firstInputValue < 0 || secondInputValue < 0) {
        return alert('Please enter a valid input number');
    }
    else if (isThreeValues) {
        const area = threeValueMultiply(firstInputValue, secondInputValue);
        setResultSiteNavBar(nameOfGeometry, area)
    }
    else {
        const area = twoValueMultiply(firstInputValue, secondInputValue);
        setResultSiteNavBar(nameOfGeometry, area)
    }
}

function setResultSiteNavBar(nameOfGeometry, calculateResult) {
    const areaCalculationContainer = document.getElementById('area-container');
    const div = document.createElement('ol');
    div.innerHTML = `
    <p class="mt-3">
        <span class="me-2">${serial}</span>
        <span class="me-2">${nameOfGeometry}</span>
        <small class="me-2">${calculateResult}cm<sup>2</sup></small>
        <span class="me-2 primary-color py-1 px-2 rounded-1">Convert to m<sup>2</sup></span>
    </p>
    `;
    areaCalculationContainer.appendChild(div);
}
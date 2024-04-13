window.onload = function() {
    // create variables
    let modelName = "XYZ"; // Assume default model is "XYZ"
    let duration = 0; // Assume default duration is 0

    // helper function
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost = 0;
        if (modelName === "XYZ") {
            totalCost = duration * 100;
        } else if (modelName === "CPRG") {
            totalCost = duration * 213;
        }
        costLabel.innerHTML = totalCost.toFixed(2); // Format cost to two decimal places
    }

    // model button logic
    let modelButton = document.getElementById("model-button");
    modelButton.addEventListener("click", function () {
        let modelText = document.getElementById("model-text");
        if (modelName === "XYZ") {
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
        } else if (modelName === "CPRG") {
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
        }
        recalculate();
    });

    // duration button logic
    let durationButton = document.getElementById("duration-button");
    durationButton.addEventListener("click", function () {
        let durationText = document.getElementById("duration-text");
        let newDuration = prompt("Enter new duration:");
        if (newDuration !== null && !isNaN(newDuration)) { // Check if user entered a valid number
            duration = parseInt(newDuration); // Convert input to integer
            durationText.innerHTML = duration;
            recalculate();
        }
    });
};

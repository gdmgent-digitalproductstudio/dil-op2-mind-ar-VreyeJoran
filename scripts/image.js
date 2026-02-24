const pokemon = ["squirtle", "charmander", "bulbasaur"];
let caughtPokemon = [];
let currentPokemon = Math.floor(Math.random() * pokemon.length);
let currentInstruction = 0;

const instructions = ["The pokémon is too strong! Try to weaken it!", "Your pikachu is weak! Try healing it with a potion!", "The pokémon seems weakened! Try catching it!", "Congratulations! You caught the pokémon! Add it to your Pokédex!", "Nice work! Try catching another pokémon!"];
const targetSequence = [0, 3, 1, 2];

const appearedPokemonText = document.getElementById("appeared-pokemon-text");
const instructionText = document.getElementById("instruction-text");

instructionText.textContent = instructions[currentInstruction];

const pokemonElements = document.querySelectorAll(".pokemon");
pokemonElements.forEach((element) => {
    if (element.classList.contains(`pokemon--${pokemon[currentPokemon]}`) || caughtPokemon.some(p => element.classList.contains(`pokemon--${p}`))) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});

function updatePokemonInfo() {
    const currentPokemonName = pokemon[currentPokemon];
    appearedPokemonText.innerHTML = `A wild ${currentPokemonName.charAt(0).toUpperCase() + currentPokemonName.slice(1)} appeared!`;
}

updatePokemonInfo();

function showNewPokemon() {
    if (caughtPokemon.length === pokemon.length) {
        return;
    }

    const uncaughtPokemon = pokemon.filter(p => !caughtPokemon.includes(p) && p !== pokemon[currentPokemon]);
    const randomUncaught = uncaughtPokemon[Math.floor(Math.random() * uncaughtPokemon.length)];
    currentPokemon = pokemon.indexOf(randomUncaught);

    currentInstruction = 0;
    updatePokemonInfo();
    instructionText.textContent = instructions[currentInstruction];

    pokemonElements.forEach((element) => {
        if (element.classList.contains(`pokemon--${pokemon[currentPokemon]}`) || caughtPokemon.some(p => element.classList.contains(`pokemon--${p}`))) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

// Listen for target found and check if correct target
const scene = document.querySelector(".ar-scene");
scene.addEventListener("targetFound", (event) => {
    const foundTargetIndex = event.srcElement.components["mindar-image-target"].attrValue.targetIndex;

    if (foundTargetIndex === targetSequence[currentInstruction]) {
        currentInstruction++;

        if (currentInstruction >= targetSequence.length) {
            const currentPokemonName = pokemon[currentPokemon];
            if (!caughtPokemon.includes(currentPokemonName)) {
                caughtPokemon.push(currentPokemonName);
                appearedPokemonText.innerHTML = "Congratulations! You caught a " + currentPokemonName.charAt(0).toUpperCase() + currentPokemonName.slice(1) + "!";
            }
            if (caughtPokemon.length === pokemon.length) {
                instructionText.textContent = "You caught all Pokémon! You're a true Pokémon Master!";
            } else {
                instructionText.textContent = instructions[currentInstruction];
            }
        } else {
            instructionText.textContent = instructions[currentInstruction];
        }
    }
});

// Swap Pokemon
const swapPokemonBtn = document.getElementById("swap-pokemon-btn");
swapPokemonBtn.addEventListener("click", () => {
    showNewPokemon();
});

//Reset button
const resetBtn = document.getElementById("reset-pokemon-btn");
resetBtn.addEventListener("click", () => {
    caughtPokemon = [];
    currentInstruction = 0;
    currentPokemon = Math.floor(Math.random() * pokemon.length);
    updatePokemonInfo();
    instructionText.textContent = instructions[currentInstruction];

    pokemonElements.forEach((element) => {
        if (element.classList.contains(`pokemon--${pokemon[currentPokemon]}`)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

// Download markers button
const downloadMarkersBtn = document.getElementById("download-markers-btn");
downloadMarkersBtn.addEventListener("click", async () => {
    const zip = new JSZip();

    try {
        const targetFiles = ["target-0.png", "target-1.png", "target-2.png", "target-3.png"];

        for (const targetFile of targetFiles) {
            const response = await fetch(`./markers/${targetFile}`);
            const blob = await response.blob();
            zip.file(targetFile, blob);
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "markers.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading markers:", error);
        alert("Failed to download markers. Please try again.");
    }
});
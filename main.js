const womensday = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
        .then(response => response.json())
}

const womenElement = document.querySelector("main")

const applicationElemnt = document.querySelector("main")

applicationElemnt.addEventListener("click", event => {
    console.log("you clicked it", event)
})

applicationElemnt.addEventListener("click", event => {
    if (event.target.id.startsWith("learnmore")) {
        console.log("you clicked to Learn More")
        const splitId = event.target.id.split("--");
        console.log(splitId);
    }
})

const showWomen = () => {
    womensday()
        .then(womenElemntArray => {
            console.log(womenElemntArray);
            let fullHTML = ""
            womenElemntArray.forEach((object) => {
                fullHTML += "<hr/>"
                fullHTML += index(object)
            });

            womenElement.innerHTML += fullHTML;
        })
}

const index = (womansObject) => {
    return `
          <section class="woman">
            <h2>Inventor: ${womansObject.inventor}</h2>
            <div>Invention: ${womansObject.invention}</div>
            <button id="learnmore--${womansObject.id}">Learn More</button>
            </section>
            `
}

showWomen();
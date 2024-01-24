document.addEventListener('DOMContentLoaded', function () {
    const bath = document.querySelector('#blob'); // Assuming #blob is the container where you want to append divs

    if (!bath) {
        console.error("Element with ID 'blob' not found in the document.");
        return;
    }

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    const colors = ["bg-primary", "bg-danger", "bg-warning"];

    async function getData() {
        try {
            const response = await fetch('https://opensheet.elk.sh/1qu_O6rswm0f1EC4B3kUR7MGZUD6T0gzzfRmH6MaBI3A/Sheet1');
            console.log("Server Response:", response);

            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Data from server:", data);

            if (Array.isArray(data) && data.length > 0) {
                data.forEach((row) => {
                    if ('text' in row) {
                        const container = document.createElement("div");
                        const content = document.createElement("p");
                        container.append(content);

                        // Randomly select a color from the 'colors' array
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];

                        container.classList.add("container", "my-3", "p-3", "border", "rounded", "w-75", randomColor);

                        bath.append(container);

                        content.classList.add("lead", "text-dark");
                        content.innerText = row.text;

                        let randomTop = getRandomNumber(0, winHeight);
                        let randomLeft = getRandomNumber(0, winWidth);

                        container.style.top = randomTop + "px";
                        container.style.left = randomLeft + "px";
                    } else {
                        console.error("Invalid data structure or missing 'text' property in a row.");
                    }
                });
            } else {
                console.error("Invalid data structure or empty array.");
            }

        } catch (err) {
            console.log(err);
        }
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    getData();
});
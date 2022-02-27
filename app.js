const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayData(data))
}

loadData()

const displayData = (numbers) => {
    const photoContainer = document.getElementById("photo-container");
    for (const number of numbers) {
        const div = document.createElement('div');
        div.classList.add("col")
        div.innerHTML = `
        <div onclick="showDetails('${number.id}')" class="card h-100">
            <img src="${number.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${number.id}</h5>
                <p class="card-text">${number.title}</p>
            </div>
        </div>
        `;
        photoContainer.appendChild(div);
    }
}

const showDetails = (data) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => fullDetails(data))
}

const fullDetails = (number) => {
    const fullDetail = document.getElementById("full-detail");
    fullDetail.innerHTML = `
    <div class="card">
            <img src="${number.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${number.title}</p>
            </div>
        </div>
    `;
}
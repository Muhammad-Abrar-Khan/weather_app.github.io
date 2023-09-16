const searchButton = document.querySelector('.search');
const leftContainer = document.getElementById('leftContainer');

searchButton.addEventListener('click', function() {
    // Clear the content of the leftContainer
    leftContainer.innerHTML = '';

    // Create the search box HTML
    leftContainer.innerHTML  = `
        <style>
            .cross{
                display:flex;
                justify-content:end;
                font-weight:bold;
            }
            .searchBox {
                position: absolute;
                top: 15%;
                left: 12.5%;
                transform: translate(-50%, -50%);
                background: #2f3640;
                border-radius: 50px;
                padding: 10px;
                display: flex;
                align-items: center;
            }

            .searchBox:hover .searchInput {
                width: 250px;
            }

            .searchButton {
                color: white;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #2f3640;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: 0.4s;
            }

            .searchInput {
                border: none;
                background: none;
                outline: none;
                padding: 0 0 0 0.7rem;
                color: white;
                font-size: 16px;
                transition: 0.4s;
                width: 0px;
            }

            .searchicon {
                height: 2rem;
                width: 2rem;
            }
        </style>
        <div class="cross">X</div>
        <div class="searchBox">
            <input class="searchInput" type="text" placeholder="Search">
            <button class="searchButton">
                <img src="/weather-app-master/icons8-search-48.png" class="searchicon" alt="">
            </button>
        </div>
    `;

    // Append the search box HTML to the leftContainer
});

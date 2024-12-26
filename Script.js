const handleExtraClick = (element) => {

    document.querySelectorAll('.extra-cat').forEach((el) => {
        el.classList.remove('cat-selected');
    });


    element.classList.add('cat-selected');

    const selectedText = element.querySelector('.cat-desc').textContent;
    document.getElementById('summaryExtras').textContent = selectedText;
};



const handleFreqClick = (element) => {
    document.querySelectorAll('.single-frequncy').forEach((el) => {
        el.classList.remove('freq-selected');
    });

    element.classList.add('freq-selected');

    const selectedText = element.textContent;

    document.getElementById('summaryFrequency').textContent = selectedText;
};



document.addEventListener("DOMContentLoaded", function () {
    const serviceDropdown = document.getElementById('serviceDropdown');
    const bedroomSelect = document.getElementById("bedroomDropdown");
    const bathroomSelect = document.getElementById("bathroomDropdown");
    const sqFtSelect = document.getElementById("sqFtDropdown");

    serviceDropdown.addEventListener('change', () => {
        document.getElementById('summaryService').textContent = serviceDropdown.value;
    })

    bedroomSelect.addEventListener('change', () => {
        document.getElementById('summaryBedrooms').textContent = bedroomSelect.value;
    })

    bathroomSelect.addEventListener('change', () => {
        document.getElementById('summaryBathrooms').textContent = bathroomSelect.value;
    })

    sqFtSelect.addEventListener('change', () => {
        document.getElementById('summarySqFt').textContent = sqFtSelect.value;
    })


    // Populate Extras

    const ExtrasList = [
        {
            id: 1,
            imageSrc: 'Img/Logo 1.Png',
            textContent: 'Inside Oven'
        },
        {
            id: 2,
            imageSrc: 'Img/Logo 2.Png',
            textContent: 'Inside Fridge'
        },
        {
            id: 3,
            imageSrc: 'Img/Logo 3.Png',
            textContent: 'Inside Cabinets'
        },
        {
            id: 4,
            imageSrc: 'Img/Logo 4.Png',
            textContent: 'Interior Windows'
        },
        {
            id: 5,
            imageSrc: 'Img/Logo 5.Png',
            textContent: 'Wet Wipe Window Blinds'
        },
        {
            id: 6,
            imageSrc: 'Img/Logo 6.Png',
            textContent: 'Green Cleaning'
        },
        {
            id: 7,
            imageSrc: 'Img/Logo 7.Png',
            textContent: 'Organization'
        },
        {
            id: 8,
            imageSrc: 'Img/Logo 8.Png',
            textContent: 'Laundry & Folding'
        },
        {
            id: 9,
            imageSrc: 'Img/Logo 9.Png',
            textContent: 'Dishes'
        }
    ];


    const FrequencyList = ["One Time", "Weekly - 15%", "  Every 2 Weeks - 10%", "Every 3 Weeks - 7%", "Every 4 Weeks - 5%"];


    const GenrateFreqHtml = () => {
        let html = '';
        FrequencyList.forEach((e, index) => {
            html += ` <div class="single-frequncy" id="single-fre-${index}" onclick="handleFreqClick(this)">
   ${e}
            </div>`;
        })

        return html;
    }


    document.getElementById('frequncies-wrapper').innerHTML = GenrateFreqHtml();


    const GenrateExtrasHtml = () => {
        let html = '';
        ExtrasList.forEach((e, index) => {
            html += `
    <div class="extra-cat" id="extra-cat-${index}" onclick="handleExtraClick(this)">
        <div class="cat-image-wrapper">
            <img src="${e.imageSrc}" alt="">
        </div>
        <p class="cat-desc">${e.textContent}</p>
    </div>`;
        });
        return html;
    };
    document.getElementById('extra-cat-wrapper').innerHTML = GenrateExtrasHtml();
});

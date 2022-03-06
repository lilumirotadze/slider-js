let data = [
    {
        id:1,
        imageUrl:'https://images.news18.com/ibnlive/uploads/2021/10/animal-day-16332888954x3.jpg',
        title:'Animals',
        url: 'https://google.com'
    },
    {
        id:2,
        imageUrl:'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/102783/s960_pexels-frans-van-heerden-802112.jpg',
        title:'Giraffe',
        url: 'https://google.com'
    },
    {
        id:3,
        imageUrl:'https://www.oie.int/app/uploads/cache/2021/04/doruk-yemenici-frjamio-tb0-unsplash/3212795280.jpg',
        title:'Cows',
        url: 'https://google.com'
    },
    {
        id:4,
        imageUrl: 'https://d.newsweek.com/en/full/1983028/stock-image-raccoon.jpg?w=466&h=311&f=24d43bf335f3ef249713edd85b97d184',
        title:'Enot',
        url: 'https://google.com'
    }
]

let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${item.imageUrl})`;
    tagImage.setAttribute('class', 'slide-bg');
    
    
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);




setSlide();
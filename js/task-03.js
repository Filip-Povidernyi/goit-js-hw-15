const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery');
const markupList = [];
for (let image of images) {
  const markup = `<li><img src=${image.url} alt=${image.alt}/></li>`;
  markupList.push(markup);
};

const markupString = markupList.join('');

list.insertAdjacentHTML("beforeend", markupString);
list.style.display = 'flex';
list.style.gap = '8px';
list.style.flexWrap = 'wrap';
list.style.flexDirection = 'column';

list.addEventListener('click', event => {

  const target = event.target;

  if (target.nodeName === 'IMG') {

    const width = target.width;
    const height = target.height;

    target.width = width / 4;
    target.height = height / 4;
  }
});
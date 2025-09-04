const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {

    const title = item.firstElementChild.textContent;
    console.log(`Category: ${title}`);
    const count = item.lastElementChild.children;
    console.log(`Elements: ${count.length}`);
});
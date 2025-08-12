const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(drop => {
    drop.addEventListener('click', () => {
        const content = drop.nextElementSibling;
        content.classList.toggle('d-none');
    })
})

const itemDropdown = document.querySelectorAll('.item-dropdown-select');

itemDropdown.forEach(item => {
    item.addEventListener('click', () => {
        const icon = item.querySelector('i');
        icon.classList.toggle('d-none');
    })
})

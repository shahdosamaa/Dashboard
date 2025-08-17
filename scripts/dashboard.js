const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const mainContent = document.getElementById('main-content');
const dashboardContent = mainContent.innerHTML;

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.items li').forEach(li => {
    li.addEventListener('click', e => {
    e.preventDefault();

    const link = li.querySelector('a');
    const page = link.getAttribute('data-page');

    if (page === 'dashboard.html') {
        mainContent.innerHTML = dashboardContent;
    } else {
        fetch(`pages/${page}`)
        .then(res => res.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(err => {
            console.error('Error loading page:', err);
            mainContent.innerHTML = "<p style='color:red;'>Error loading page</p>";
        });
    }

    if (window.innerWidth <= 768) {
        closeMenu();
    }
    });
});

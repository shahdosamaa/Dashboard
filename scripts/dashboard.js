const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const mainContent = document.getElementById('main-content');

const dashboardContent = mainContent.innerHTML;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

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
                .catch(err => console.error('Error loading page:', err));
        }

        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
        }
    });
});

const checkbox = document.querySelectorAll('.interest__check');


Array.from(checkbox).forEach(el => {
    if (!el.closest('.interests_active'))
    el.addEventListener('change', (e) => {
        e.target.closest('li').querySelectorAll('.interest__check').forEach(item => {
            item.checked = e.target.checked;
        })
        })
    })


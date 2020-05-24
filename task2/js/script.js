'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.querySelectorAll('.promo__adv img');

ads.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').innerHTML = 'драма';

document.querySelector('.promo__bg').style.backgroundImage = 'url(img/bg.jpg)';

movieDB.movies.sort().forEach((item, i) => {
    const promoItem = document.createElement('li');
    promoItem.classList.add('promo__interactive-item');
    promoItem.innerHTML = `${i+1}. ${item} <div class="delete"></div>`;
    document.querySelector('.promo__interactive-list').append(promoItem);
});
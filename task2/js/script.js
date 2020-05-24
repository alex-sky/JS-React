'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const ads = document.querySelectorAll('.promo__adv img'),
          promoList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          inputFilm = addForm.querySelector('.adding__input'),
          favorite = addForm.querySelector('[type="checkbox"]');

    ads.forEach(item => {
        item.remove();
    });

    document.querySelector('.promo__genre').innerHTML = 'драма';

    document.querySelector('.promo__bg').style.backgroundImage = 'url(img/bg.jpg)';
    
    const addFilm = () => {
        promoList.innerHTML = '';
        movieDB.movies.sort();

        movieDB.movies.forEach((item, i) => {
            const promoItem = document.createElement('li');
            promoItem.classList.add('promo__interactive-item');
            promoItem.innerHTML = `${i+1}. ${item} <div class="delete"></div>`;
            promoList.append(promoItem);
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addFilm();
            });
        });
    };

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        let film = inputFilm.value;
        if (!film) {
            alert('Заполните поле');
            return false;
        } else if ( film.length > 21 ) {
            film = `${film.substring(0, 22)}...`;
        }

        if (favorite.checked) {
            console.log('favorite');
        }

        movieDB.movies.push(film);

        addFilm();

        e.target.reset();
    });

    addFilm();
    
});
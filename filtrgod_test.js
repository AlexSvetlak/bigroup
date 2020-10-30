Feature('Nova-city');

Scenario('Фильтр. Год.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(2);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Жилая недвижимость');

    I.click('2020');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Жилая недвижимость');
    I.click('button.styles__ButtonStyle-er4vjq-0.keCPlR');

    I.see('Список');
    I.see('Шахматка');

    I.click('Сбросить фильтр');
    I.click('2021');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Список');
    I.see('Шахматка');

    I.click('Сбросить фильтр');
    I.click('2022+');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Список');
    I.see('Шахматка');



});    
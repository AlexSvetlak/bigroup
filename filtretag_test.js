Feature('Nova-city');

Scenario('Фильтр. Этаж.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(2);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Жилая недвижимость');

    I.fillField({name:'floor_from'}, '2');
    I.fillField({name:'floor_to'}, '7');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Жилая недвижимость');
    I.click('button.styles__ButtonStyle-er4vjq-0.keCPlR');

    I.see('Список');
    I.see('Шахматка');

    I.click('Не последний этаж');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Список');
    I.see('Шахматка');



    



});    
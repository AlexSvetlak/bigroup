Feature('Nova-city');

Scenario('Фильтр. Цена.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(2);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Жилая недвижимость');

    I.fillField({name:'price_from'}, '5');
    I.fillField({name:'price_to'}, '75');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Жилая недвижимость');
    I.click('button.styles__ButtonStyle-er4vjq-0.keCPlR');

    I.see('Список');
    I.see('Шахматка');


    



});    
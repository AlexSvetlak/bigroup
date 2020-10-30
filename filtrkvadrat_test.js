Feature('Nova-city');

Scenario('Фильтр. Квадратура.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(2);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Жилая недвижимость');

    I.fillField({name:'square_from'}, '50');
    I.fillField({name:'square_to'}, '120');
    I.wait(2);
    I.click('Показать варианты');

    I.see('Жилая недвижимость');
    I.click('button.styles__ButtonStyle-er4vjq-0.keCPlR');

    I.see('Список');
    I.see('Шахматка');


    



});    
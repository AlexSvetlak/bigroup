Feature('Nova-city');

Scenario('Фильтр. Районы.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(1);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.see('Жилая недвижимость');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.see('Алматы');
    I.see('Есиль');


});    
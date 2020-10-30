Feature('Nova-city');

Scenario('Фильтр. Объекты.', (I) => {  
    I.amOnPage('https://nova-city.kz/ru/filter?room_type=1');
    I.wait(1);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.see('Жилая недвижимость');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.wait(1);
    
    I.click('#react-select-real_estate_id-option-0');
    
    I.click('Показать варианты');
    I.see('Sezim Qala', 'h3');
    I.dontSee('Nova City на Рыскулбекова');
    I.dontSee('Nova City на Туране');
    I.dontSee('Ару Қала');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.wait(1);
    I.click('#react-select-real_estate_id-option-1');
    I.click('Показать варианты');
    I.dontSee('Sezim Qala');
    I.see('Nova City на Рыскулбекова');
    I.dontSee('Nova City на Туране');
    I.dontSee('Ару Қала');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.wait(1);
    I.click('#react-select-real_estate_id-option-2');
    I.click('Показать варианты');
    I.dontSee('Sezim Qala');
    I.dontSee('Nova City на Рыскулбекова');
    I.see('Nova City на Туране');
    I.dontSee('Ару Қала');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.wait(1);
    I.click('#react-select-real_estate_id-option-3');
    I.click('Показать варианты');
    I.dontSee('Sezim Qala');
    I.dontSee('Nova City на Рыскулбекова');
    I.dontSee('Nova City на Туране');
    I.see('Ару Қала');



});
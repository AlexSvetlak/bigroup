Feature('Nova-city');

Scenario('Главная', (I) => {
    I.amOnPage('nova-city.kz');
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Показать варианты');
    I.click('Показать варианты');
    I.wait(2);
    I.see('Жилая недвижимость', 'h1');

    I.click('div.react-select__value-container.css-1hwfws3');
    I.wait(2);
    I.see('Sezim Qala');
    I.see('Nova City на Рыскулбекова');
    I.see('Nova City на Туране');
    
});

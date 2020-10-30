Feature('Nova-city');

Scenario('Фильтр. количество комнат', (I) => {
    I.amOnPage('nova-city.kz');
    I.wait(2);
    I.click('a.style__CloseModalButton-sc-1c8jcy9-3.expMoC');
    I.wait(2);
    I.see('Показать варианты');
    I.click('Показать варианты');
    I.wait(2);
    I.see('Жилая недвижимость', 'h1');

    I.click('1');
    I.click('Показать варианты');
    I.wait(2);
    I.seeElementInDOM('div.style__FlatContent-sc-1384krn-7.ffmVKx');
    I.wait(5);

    I.click('span.styles__ButtonLabel-er4vjq-1.kDIPPQ');
    I.see('Список');
    I.see('Шахматка');

    I.click('Сбросить фильтр', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.click('2', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.wait(2);
    I.click('Показать варианты');
    I.see('Список');
    I.see('Шахматка');

    I.click('Сбросить фильтр', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.click('3', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.wait(2);
    I.click('Показать варианты');
    I.see('Список');
    I.see('Шахматка');

    I.click('Сбросить фильтр', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.click('4+', 'div.style__FilterBody-s29w98-1.cOdUXP');
    I.wait(2);
    I.click('Показать варианты');
    I.see('Список');
    I.see('Шахматка');
  
    
});

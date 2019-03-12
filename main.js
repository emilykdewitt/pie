const pies = [
    {
        name: "Dutch Apple Pie",
        ingredients: 'apples,sugar,butter,nutmeg,dutch people',
        bakeTemp: 5000,
        drinkPairing: 'Earl Grey',
        imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
        instructor: 'Zoe',
        iceCreamPairing: 'Vanilla'
    },
    {
        name: 'Berry Pie',
        ingredients: 'berries',
        bakeTemp: 5000,
        drinkPairing: 'wine',
        imageUrl: 'https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/m/800/mixed-berry-pie.ashx?vd=20180710T032825Z&hash=43EA41794B894116CBFA583CB5EE13C2E062F46E',
        instructor: 'Zoe',
        iceCream: 'Vanilla'
    },
    {
        name: 'Test1',
    },
    {
        name: 'Test2',
    },
    {
        name: 'Test3',
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const pieMaker = () => {
    let domString = '';
    for (i = 0; i < pies.length; i++) {
        domString += `<div class="yum">`;
        domString +=    `${pies[i].name}`
        domString += `</div>`
    };
};
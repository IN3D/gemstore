var app = angular.module('store', []);

app.controller('StoreController', function() {
    this.products = gems;
});

var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: '...',
        images: [
            {
                full:  'assets/img/gem-03.gif',
                thumb: 'assets/img/gem-03.gif'
            }
        ],
        canPurchase: true,
        soldOut: true,
    },
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "...",
        images: [
            {
                full:  'assets/img/gem-01.gif',
                thumb: 'assets/img/gem-01.gif'
            }
        ],
        canPurchase: false,
    }
];

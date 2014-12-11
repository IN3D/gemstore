var app = angular.module('store', []);

app.controller('StoreController', function() {
    this.products = gems;
});

app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
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
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "tim@hater.com"
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

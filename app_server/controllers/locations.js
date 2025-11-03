/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work \
        when out and about. Perhaps with coffee, cake or a pint? \
        Let Loc8r helps you find the place you're looking for.",
        locations: [
            {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premiun wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premiun wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premiun wifi'],
                distance: '250m'
            }
        ]
    }
    );
};

/* GET 'Location info' page */
const locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {title: 'Starcups'},
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '서울특별시 관악구 호암로 100',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {lat: 37.3666, lng: 127.0111},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Samkeun Kim',
                rating: 5,
                timestamp: '16 July 2024',
                reviewText: 'wifi가 잘 터짐!'
            },{
                author: 'Chaehyeon Jang',
                rating: 3,
                timestamp: '17 June 2025',
                reviewText: '커피가 환상적임~'
            }]
        }
    });
};

/* GET 'Add review' page */
const addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: { title: 'Review Starcups'}
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};
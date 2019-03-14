const test = QUnit.test;

QUnit.module('filters');

const routes = [
    {
        id: 'fp-marathon',
        name: 'Forest Park Marathon',
        distance: '26.38',
        elevation: '3200',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'ramblers',
        name: 'Half Marathon +',
        distance: '14.03',
        elevation: '1600',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'half',
        name: 'Stumptown Races Half Marathon',
        distance: '13.1',
        elevation: '2142',
        bathroom: true,
        familyFriendly: false,
    },
    {
        id: 'ultra',
        name: 'Stumptown Races 50k',
        distance: '31',
        elevation: '4180',
        bathroom: true,
        familyFriendly: false,
    }
];


function filterByMaxMiles(routes, maxMiles) {
    return routes.filter(route => route.distance <= maxMiles);
}

function filterByMinMiles(routes, minMiles) {
    return routes.filter(route => route.distance >= minMiles);
}

function filterByDistance(routes, minMiles, maxMiles) {
    const filteredByMin = filterByMinMiles(routes, minMiles);
    return filterByMaxMiles(filteredByMin, maxMiles);
}

test('filter routes by max distance', assert => {
    const maxMiles = 20;
    const expected = [
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'half',
            name: 'Stumptown Races Half Marathon',
            distance: '13.1',
            elevation: '2142',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMaxMiles(routes, maxMiles);

    assert.deepEqual(result, expected);
});

test('filter by min distance', assert => {
    const minMiles = 20;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ultra',
            name: 'Stumptown Races 50k',
            distance: '31',
            elevation: '4180',
            bathroom: true,
            familyFriendly: false,
        }
    ];

    const result = filterByMinMiles(routes, minMiles);

    assert.deepEqual(result, expected);
});

test('filter routes by min and max distances', assert => {
    const minMiles = 14, maxMiles = 30;
    const expected = [
        {
            id: 'fp-marathon',
            name: 'Forest Park Marathon',
            distance: '26.38',
            elevation: '3200',
            bathroom: true,
            familyFriendly: false,
        },
        {
            id: 'ramblers',
            name: 'Half Marathon +',
            distance: '14.03',
            elevation: '1600',
            bathroom: true,
            familyFriendly: false,
        },
    ];

    const results = filterByDistance(routes, minMiles, maxMiles);

    assert.deepEqual(results, expected);
});
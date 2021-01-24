const initialState = {
    isLoggedIn: false,
    form:{
        login:[
            {
                label: 'Email',
                type: 'email',
                value: '',
                message: 'Please enter a correct email address',
                valid: false,
                validation: 'email',
                changed: false
            },
            {
                label: 'Password',
                type: 'password',
                value: '',
                message: '',
                valid: true,
                validation: 'none',
                changed: false
            }
        ],
        register: [
            {
                label: 'First Name',
                value: '',
                message: 'Please enter a correct first name',
                valid: false,
                validation: 'name',
                changed: false
            },
            {
                label: 'Last Name',
                value: '',
                message: 'Please enter a correct last name',
                valid: false,
                validation: 'name',
                changed: false
            },
            {
                label: 'Email',
                type: 'email',
                value: '',
                message: 'Please enter a correct email address',
                valid: false,
                validation: 'email',
                changed: false
            },
            {
                label: 'Password',
                type: 'password',
                value: '',
                message: 'Password must be at least 8 characters with 1 upper case letter and 1 number.',
                valid: false,
                validation: 'password',
                changed: false
            },
        ],
    },
    users: [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Horne',
            email: 'cold@gmail.com',
            pass: 'coldPass911$',
        },
        {   id: 2,
            firstName: 'James',
            lastName: 'Macdonald',
            email: 'rainy@gmail.com',
            pass: 'rainyPass911$',
        },
        {   id: 3,
            firstName: 'Robert',
            lastName: 'Mcbride',
            email: 'night@gmail.com',
            pass: 'nightPass911$',
        },
        {   id: 4,
            firstName: 'Michael',
            lastName: 'Riddle',
            email: 'thunderstorm@gmail.com',
            pass: 'thunderstormPass911$',
        },
        {   id: 5,
            firstName: 'Christopher',
            lastName: 'Manning',
            email: 'snowy@gmail.com',
            pass: 'snowyPass911$',
        },
        {   id: 6,
            firstName: 'Jason',
            lastName: 'Ray',
            email: 'winter@gmail.com',
            pass: 'winterPass911$',
        },
        {   id: 7,
            firstName: 'Brian',
            lastName: 'Hunter',
            email: 'blizzard@gmail.com',
            pass: 'blizzardPass911$',
        }
    ],
    markets: [
        {
            name: 'BNB',
            pair: 'BTC',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'ETH',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'USD',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'EUR',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'BTC',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'ETH',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'USD',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'EUR',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'BTC',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'ETH',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'USD',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'EUR',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'BTC',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'ETH',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'USD',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
        {
            name: 'BNB',
            pair: 'EUR',
            lastPrice: '0.0012849',
            lastPriceUSD: '42.13',
            change: '1.62',
            high: '0.0012911',
            low: '0.0012480',
            cap: '$6,425.71M',
            volume: '920.98',
            fav: false,
        },
    ],
    rank:[
        {
            pair: 'BNB/USD',
            hi: '40.92',
            lo: '40.85',
            change: '0.64',
            volume: '12,320,640',
        },
        {
            pair: 'BNB/USD',
            hi: '40.92',
            lo: '40.85',
            change: '0.64',
            volume: '12,320,640',
        },
        {
            pair: 'BNB/USD',
            hi: '40.92',
            lo: '40.85',
            change: '0.64',
            volume: '12,320,640',
        },
        {
            pair: 'BNB/USD',
            hi: '40.92',
            lo: '40.85',
            change: '0.64',
            volume: '12,320,640',
        },
    ],
}

export {initialState}
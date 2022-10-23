console.log(factorial(3))
 console.log(factorial(5))


   function factorial(n){
    if (n <= 1){
        return 1;
    }else {
        return n * factorial(n-1);
   } 
} 


const CATEGORY = 'category';
const PRODUCT = 'product';
const menu = [
    {
        type: CATEGORY,
        name: 'Mac',
        menu: [
            {
                type: PRODUCT,
                name: 'MacBook Pro 16”',
            },
            {
                type: PRODUCT,
                name: 'iMac 24”',
            },
            {
                type: PRODUCT,
                name: 'iMac 27”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: CATEGORY,
                        name: 'Featured Magic',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'Magic Keyboard',
                            },
                            {
                                type: PRODUCT,
                                name: 'Magic Trackpad',
                            },
                        ],
                    },
                    {
                        type: CATEGORY,
                        name: 'Audio',
                        menu: [
                            {
                                type: PRODUCT,
                                name: 'AirPods Pro',
                            },
                            {
                                type: PRODUCT,
                                name: 'AirPods Max',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Ipad',
        menu: [
            {
                type: PRODUCT,
                name: 'iPad Pro 11”',
            },
            {
                type: PRODUCT,
                name: 'iPad Pro 12.9”',
            },
            {
                type: CATEGORY,
                name: 'Accessories',
                menu: [
                    {
                        type: PRODUCT,
                        name: 'Apple Pencil',
                    },
                    {
                        type: PRODUCT,
                        name: 'Smart Keyboard',
                    },
                ],
            },
        ],
    },
    {
        type: CATEGORY,
        name: 'Empty Category',
        menu: [],
    },
]


let cnt = 0

recurs(menu, cnt)
function recurs(menu, cnt) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].type === 'category') {
            console.log(cnt + ` * ` + menu[i].name);
            cnt++
            recurs(menu[i].menu, cnt--)
        }

        if (menu[i].type === 'product') {
            console.log(cnt + ` - ` + menu[i].name)
        }
    }
}

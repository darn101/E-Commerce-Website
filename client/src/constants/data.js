export const navData = [
    { url: 'https://img.freepik.com/premium-photo/paper-bag-with-fresh-healthy-groceries-food-isolated-white-background_434420-196.jpg?w=826', text: 'Grocery' },
    { url: 'https://img.freepik.com/free-psd/mobile-phone-mock-up-design_1297-17.jpg?w=740&t=st=1692267241~exp=1692267841~hmac=5be91442ca267671ffb47f92fcdeab05b605be3352a4a2518afa8f3ba47b44df', text: 'Mobile' },
    { url: 'https://img.freepik.com/free-photo/man-sweatshirt-dancing-like-rapper_1187-2280.jpg?w=740&t=st=1692267414~exp=1692268014~hmac=43a626b5dbfb5a0c13d049a50678c1e0039039b820f07b45227867b919760cba', text: 'Fashion' },
    { url: 'https://img.freepik.com/premium-photo/computer_23785-1230.jpg?w=996', text: 'Electronics' },
    { url: 'https://img.freepik.com/free-psd/chair-pillow_176382-879.jpg?w=740&t=st=1692267546~exp=1692268146~hmac=33cf210bd8ac1d9e7dcdbde498c83bdac669619cb6e1e4535ab6dc30777ec838', text: 'Home & Furniture' },
    { url: 'https://img.freepik.com/premium-photo/home-appliance-washing-machine-isolated_662322-2.jpg?w=740', text: 'Appliances' },

];

export const bannerData = [
    { id: 1, url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b212f118883485.6092425f50616.jpg' },
    { id: 2, url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f19216118883485.6092425f52680.jpg' },
    { id: 3, url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e534f6118883485.6092425f51d79.jpg' },

]

export const bannerDataTwo = [
    { id: 1, url: 'https://as2.ftcdn.net/v2/jpg/04/89/28/05/1000_F_489280525_nISHfaWCctYBFlyYkTQUkzQwVOPWmyvp.jpg' },
    { id: 2, url: 'https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?w=1380&t=st=1692440676~exp=1692441276~hmac=4a9e2f207ca7212a8038e250463be86c4033349d1524253df7c9c20a14d748c3' },
    { id: 3, url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d80af4118883485.6092425f50c79.jpg' },

]



const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';








const loginSignupimage = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png';

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';


export const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

export const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';



function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
}

function isObj(val) {
    return typeof val === 'object'
}

function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
        return JSON.stringify(val)
    } else {
        return val
    }
}

function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)

    Object.keys(params).forEach(key => {
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', key)
        input.setAttribute('value', stringifyValue(params[key]))
        form.appendChild(input)
    })

    return form
}

export function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
}
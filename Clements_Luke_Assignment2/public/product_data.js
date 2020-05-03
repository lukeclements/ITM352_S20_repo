/* Luke Clements */
/* The following data is the type, price, image link, and description for all of my items. */
var products_data = [
    {
        "type": "Uke Flamed Acaia",
        "price": 129.00,
        "image": "./images/ukeacc.jpg",
        "description": "This ukulele is made from acacia wood and is known for its warm sounding playability, beautiful wood grain pattern, and mahogany neck and fretboard."
    },
    {
        "type": "Uke Artist Vintage Distressed",
        "price": 119.00,
        "image": "./images/ukeartvc.jpg",
        "description": "This ukulele has a warm tone and sound and is built with a spruce wood top and mahogany back and sides."
    },
    {
        "type": "Uke Bamboo",
        "price": 129.00,
        "image": "./images/ukebambooc.jpg",
        "description": "This ukulele is built with a mahogany neck, walnut bridge and fretboard, and beautiful pearl moon phase inlays. "
    },
    {
        "type": "Uke Crescent Olive Ash",
        "price": 199.00,
        "image": "./images/ukeexoa.jpg",
        "description": "This is ukulele features a olive ash body, mahogany neck, and a black walnut fingerboard."
    },
    {
        "type": "Uke Crescent Spalt Maple Concert",
        "price": 199.00,
        "image": "./images/ukeexsm.jpg",
        "description": "This ukulele features a spalt maple wood body, tortoise shell binding, mahogany wood neck, and pearloid inlays."
    }
];
if(typeof module != 'undefined') {
    module.exports.products = products_data;
}
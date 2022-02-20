const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const CAT_BTN = document.getElementById('catBtn');

const GET_CATS = async () => {
    try {
        const DATA = await fetch(BASE_URL);
        const JSON = await DATA.json();
        return JSON.webpurl;    
    } catch (e) {
        console.log(e.message);
    }
};

const LOAD_CAT = async () => {
    const CAT_IMG = document.getElementById('img');
    CAT_IMG.src = await GET_CATS();
};

CAT_BTN.addEventListener('click', LOAD_CAT);

LOAD_CAT();

//should change the upper case usage in the future
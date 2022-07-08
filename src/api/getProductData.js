const request = async (url) => {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = res.json();
            return data;
        }
        const errData = res.json();
        throw errData;
    } catch (e) {
        console.log(e);
    }
};

const getProductData = async () => {
    return await request('/productData.json');
};

export default getProductData;

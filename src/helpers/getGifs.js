export const getGift = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=a6contJOvTBrfUhl22VMt0mXoVYVg45s&q=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gift;
}
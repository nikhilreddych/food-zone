const useFetch = async (url) => {
    const data = await fetch(url);
    const json = await data.json();

    return json;
}

export default useFetch;
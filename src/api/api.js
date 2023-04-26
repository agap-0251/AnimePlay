import axios from "axios"

const getData = async() => {
    const res = await axios.get("https://api.jikan.moe/v4/top/anime")
    const apidata = res.data;
    return apidata;
}

const getRandomData = async() => {
    const res = await axios.get("https://api.jikan.moe/v4/random/anime")
    const apidata = res.data;
    return apidata;
}

const getAnimeAiringNow = async() => {
    const res = await axios.get("https://api.jikan.moe/v4/seasons/now")
    const apidata = res.data;
    return apidata;
}

const getUpcomingAnime = async() => {
    const res = await axios.get("https://api.jikan.moe/v4/seasons/upcoming")
    const apidata = res.data;
    return apidata;
}

const getAnimeCharacters = async(id) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
    const apidata = res.data;
    return apidata;
}

const getAnimeBySearch= async(name) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${name}&sfw`)
    const apidata = res.data;
    return apidata;
}

const getDataById = async(id) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    const apidataById = res.data;
    return apidataById;
}

export {getDataById}

export {getAnimeCharacters}

export {getAnimeBySearch}

export {getUpcomingAnime}

export {getRandomData}

export {getAnimeAiringNow}

export {getData}
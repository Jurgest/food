import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1aBe8nfZdXV1Ff3FGgpeuPUCb4zdHM6QiT3Y4iVSVTr01GNqSC4Sv_tTbLvOsAkwWPeo6Uyiv52CDBB9fQO6bcPu6srhLRo-C6leyookz1S-6ZJzoyJ3i820QxB1YXYx'
    }
});
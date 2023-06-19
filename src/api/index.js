import axios from "axios"
const BASE_URL = 'https://opensheet.elk.sh/1yG2k0Vc_qHP46E7IxrfLS1wp6sQLBNr-Y6Npaaon_tI/'

export async function getAPIFood() {
    return await axios.get(`${BASE_URL}/API-FOOD`)
}

export const getListFoodBestSeller = async () => {
    return await getAPIFood().then((response) => {
        const foodBestSeller = response.data.filter(i => i.BEST_SELLING === "TRUE")
        // console.log('foodBestSeller', foodBestSeller);
        return foodBestSeller
    })
}

export const getFoodListMenu = async (dataParams) => {
    return await getAPIFood().then((response) => {
        const title = response.data.filter(i => i.NAME_CATE === dataParams.name)
        const mappingTitle = title.map((p) => {
            return {
                titleCate: p.NAME_CATE,
            }
        })
        const list = response.data.filter(i => (i.ID && i.ID_CATEOFFOOD) === dataParams.id)
        const data = new Array(...mappingTitle, ...list)
        // console.log(dataParams);
        return [data]
    })
}

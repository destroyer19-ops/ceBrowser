import React, {useEffect, useState} from "react";

import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const API_KEY = "AIzaSyAOsHlK7Bbb-YWAX6c4QBAnLH30pYmbHyY";
const SEARCH_ENGINE_KEY = "53e5c187dc2da4b73";

const useSearch = (input) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = axios.get(`${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${input}`)
        setData(response?.data)
        }
        fetchData();
    }, [input])
    return {
        data,
    }
};
export default useSearch
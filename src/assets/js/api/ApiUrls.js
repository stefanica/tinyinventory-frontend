const API_BASE = 'http://localhost:8081/api';

const ApiUrls = {
    LOGIN: `${API_BASE}/login`,
    REGISTER: `${API_BASE}/register`,
    VALIDATE: `${API_BASE}/check-token`,
    GET_ALL_PRODUCTS: `${API_BASE}/get-products`,
    // Add more as needed
};

export default ApiUrls;
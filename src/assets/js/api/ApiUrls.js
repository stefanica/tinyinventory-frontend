const API_BASE = 'http://localhost:8081/api'; //for local use
//const API_BASE = 'https://tinyinventory.com/api'; // -> for VPS

const ApiUrls = {
    LOGIN: `${API_BASE}/login`,
    REGISTER: `${API_BASE}/register`,
    VALIDATE: `${API_BASE}/check-token`,
    GET_ALL_PRODUCTS: `${API_BASE}/get-products`,
    RESET_PASSWORD_EMAIL: `${API_BASE}/reset-password-email`,
    CHANGE_PASSWORD: `${API_BASE}/change-password`,
    PROFILE: `${API_BASE}/user`,
    CLOSE_ACCOUNT: `${API_BASE}/close-account`,
    // Add more as needed
};

export default ApiUrls;
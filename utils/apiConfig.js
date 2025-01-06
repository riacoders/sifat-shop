const baseURL = import.meta.env.VITE_APP_BASE_URL

const API_CONFIG = {
	register: `${baseURL}/create/user`,
	login: `${baseURL}/check/user`,
}

export default API_CONFIG

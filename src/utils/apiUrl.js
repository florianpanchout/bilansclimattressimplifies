export const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:8000'

export const apiVersion = process.env.REACT_APP_API_VERSION || '/api/v1'

export default baseUrl + apiVersion

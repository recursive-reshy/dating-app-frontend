import axiosClient from '../axiosClient'

import API_ENDPOINTS from './apiConfig'

const getAllPerople = () => axiosClient.get( API_ENDPOINTS.person.getPeople )

export {
  getAllPerople
}
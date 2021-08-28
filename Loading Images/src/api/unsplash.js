import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID k1W6yizfZNmfREiTTgb2102VCGFN-SBE_55imwuCLdE'
    }
})
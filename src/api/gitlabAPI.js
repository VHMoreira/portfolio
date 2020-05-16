import axios from "axios";

const getinfoPerfil = async () => {
    const res = await axios.get('https://gitlab.com/api/v4/users/4643739');
    return res.data;
}

export {
    getinfoPerfil,
}
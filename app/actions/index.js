const urlGet = 'https://formula-test-api.herokuapp.com/menu';
const urlPost = 'https://formula-test-api.herokuapp.com/contact';
import axios from 'axios';
import moment from 'moment';

export const getData = () => {
    const now = new Date();

    return axios.get(urlGet)
        .then(reply => reply.data.filter(v => moment(v.expirationDate).isSameOrAfter(now)) || []);
};

export const postData = (data) => {
    axios.post(urlPost, {data})
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log('ERROR>>>', error);
        });
};
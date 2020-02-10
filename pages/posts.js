import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    uri: 'http://localhost:2368',
    key: 'e9937a326495c601ebd0d1da31',
    version: 'v3'
});

export async function getPosts() {
    return await api.getPosts.browse({
        limit: "all"
    })
        .catch(err => {
            console.log(err)
        })
}
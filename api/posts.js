import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: 'e9937a326495c601ebd0d1da31',
    version: 'v3'
});

export async function getPosts() {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
        });
}
export const get = (url) => new Promise((res, rej) => {
    fetch(url)
        .then(resp => resp.json())
        .then(resp => res(resp))
})

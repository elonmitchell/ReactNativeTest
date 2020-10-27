const BASE_URL = 'https://mobile-staging.gametime.co/v1';

function search(q) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/search?q=${encodeURIComponent(q)}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  })
}

export default {
  search,
};

export default {
  requestRepo: function(name) {
    return fetch(`https://api.github.com/${name}`)
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
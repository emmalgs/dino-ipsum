export default class DinoService {
  static getDino() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs/random`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject(this);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}
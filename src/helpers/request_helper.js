const Request = function (url) {
  this.url = url
}

Request.prototype.get = function (headers) { //headers - passing a header as an argumetn
  return fetch(this.url, { headers: headers }) //two arguments "headers:" <= key; headers jako header ktory musze uzyc;
  .then(response => response.json());
};



module.exports = Request;

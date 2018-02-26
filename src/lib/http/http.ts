export function httpAsync(theUrl, method, data) {
  return new Promise(function(resolve, reject) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
          resolve(xmlHttp.responseText )
        } else if (xmlHttp.readyState == 4 && xmlHttp.status !== 200) {
          reject(xmlHttp)
        }
    }
    xmlHttp.open(method, theUrl, true)
    xmlHttp.send(data)
  })
}

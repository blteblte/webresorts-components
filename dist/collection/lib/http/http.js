// todo: test
export function httpAsync(theUrl, method, data) {
    return new Promise(function (resolve, reject) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                resolve(xmlHttp.responseText);
            }
            else if (xmlHttp.readyState == 4 && xmlHttp.status !== 200) {
                reject(xmlHttp);
            }
        };
        if (method === 'get') {
            xmlHttp.open(method, theUrl, true);
            xmlHttp.send();
        }
        else {
            xmlHttp.open(method, objectToUrl(theUrl, data), true);
            xmlHttp.send(data);
        }
    });
}
// todo: test
function objectToUrl(theUrl, data) {
    const hasUrlParams = theUrl.indexOf('?') > -1;
    if (hasUrlParams) {
        Object.keys(data).forEach((key) => {
            theUrl += `&${data[key]}`;
        });
    }
    else {
        Object.keys(data).forEach((key, i) => {
            const p = i === 0 ? '?' : '&';
            theUrl += `${p}${data[key]}`;
        });
    }
    return theUrl;
}



export default async function getValue(req, res)
{

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin',"http://localhost:8080/count/");
    headers.append('Access-Control-Allow-Origin','*')

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: headers
      };

    
      return fetch("http://localhost:8080/count/", requestOptions).then((re) => re.text()).then((response) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.end(JSON.stringify(response));
            resolve();
    })
    .catch(error => {
        res.json(error);
        res.status(405).end();
        resolve();
    });
    //return response;
    
}
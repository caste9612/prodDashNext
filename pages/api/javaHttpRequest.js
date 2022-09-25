export default async function getValue()
{

    return fetch("http://localhost:8080/count/", {
        method: 'GET',
        redirect: 'follow',
        headers: {
            "Content-Type": "text/plain"
        },
        }).then(function(response) {
            return response.text();
      }).then(function(res){
        return res;
      });
    } 
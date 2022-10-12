export default async function getValue()
{

    return fetch("http://127.0.0.1:8080/count/", {
        method: 'GET',
        redirect: 'follow',
        headers: {
            "Content-Type": "text/plain"
        },
        }).then(function(response) {
            return response.json();
      }).then(function(res){
        return res;
      });
    } 
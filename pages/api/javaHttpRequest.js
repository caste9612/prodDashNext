export default async function getValue()
{

    return fetch("http://10.100.2.15:8080/count/", {
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

async function apihandling(anime) {
    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search) {
          id
          title {
            english
          }
          episodes
          coverImage{
              large
          }
          description
        }
      }
    }
    `;
    
    var variables = {
        search: anime,
    };
    
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
    
    const req=await fetch(url, options).then(handleResponse)
                       .then(handleData)
                       .catch(handleError);
    return req;
    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }
    
    function handleData(data) {
        return data
    }
    
    function handleError(error) {
        alert('Error, check console');
        console.error(error);
    }
}

export default apihandling


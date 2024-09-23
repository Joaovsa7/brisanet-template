export async function getCoveredCities() {
    const endpoint = "https://produtos.brisanet.net.br/api/cmsbrisasite/p1//graphql";
  
    const payload = {
      query: `query allCitiesQuery {
        cities(
          filters: { active: { eq: true } }
          sort: "name:asc"
          pagination: { pageSize: 400 }
        ) {
          data {
            id
            attributes {
              name
              state {
                data {
                  id
                  attributes {
                    UF
                    name
                  }
                }
              }
            }
          }
        }
      }`,
      operationName: "allCitiesQuery",
    };
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const { data: { cities: { data }}} = await response.json();
  
      return data
    } catch (error) {
      console.error('Error fetching data:', error);
      return []
    }
  }
  
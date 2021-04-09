import { gql, useQuery } from '@apollo/client';

const GET_COUNTRIES = gql`
    query {
        Country {
            name
            capital
            alpha2Code
            nameTranslations(filter: { languageCode_in: ["br"]}) {
              value
              languageCode
            }
            flag {
              emoji
              svgFile
            }
          }
    }
`;

const GET_COUNTRY = gql`
    query GetCountry($name: String){
        Country(alpha2Code:$name){
            name, 
            capital, 
            flag{svgFile}, 
            population, 
            area, 
            topLevelDomains{name, countries{name}}, 
            distanceToOtherCountries(first: 5) {
              distanceInKm
              countryName
            }
            location {
              latitude
              longitude
            }    
        }
    }
`;

export const useGetCountries = (): any => useQuery(GET_COUNTRIES);

export const useGetCountry = (name: String): any => useQuery(GET_COUNTRY, {
  variables: { name },
});

export default {
  useGetCountries,
  useGetCountry,
};
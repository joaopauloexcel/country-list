export function saveContries(countries: Array<any>) {
  return {
    type: 'CHANGE_COUNTRIES',
    payload: countries,
  };
}

export function saveContry(country: any) {
  return {
    type: 'CHANGE_COUNTRY',
    payload: country,
  };
}

export default function countries(state = { countries: [], country: null }, action: any) {
  switch (action.type) {
    case 'CHANGE_COUNTRIES':
      console.log({ "payload": action.payload })
      return {
        ...state,
        countries: action.payload,
      };
    case 'CHANGE_COUNTRY':
      console.log({ "payload": action.payload })
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}
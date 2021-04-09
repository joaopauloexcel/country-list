import { bindActionCreators } from 'redux';

// eslint-disable-next-line max-len
export const MapDispatchToProps = (actions: any) => (dispatch: any) => bindActionCreators(actions, dispatch);

export default {
  MapDispatchToProps,
};
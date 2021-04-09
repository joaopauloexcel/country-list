import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import SpinLoading from '../../../../common/SpinLoading';

const AnyReactComponent = ({ text, radio }: any): any => <div className={`pinMapMain`}>{text}</div>;

interface Props {
	center: any;
}

class MapGoogle extends React.Component<Props, any> {
	public state: any;
	constructor(props: Props) {
		super(props);
		this.state = {

		};

	}

	componentWillMount() { }

	render() {

		const { center } = this.props;
		const { latitude, longitude } = center;
		console.log({ center })
		return (
			<React.Suspense fallback={<SpinLoading />}>
				<div style={{ height: '100vh', width: '100%' }} data-testid="map-field">
					<GoogleMapReact
						bootstrapURLKeys={{ key: "" }}
						center={{ "lat": latitude - 40, "lng": longitude - 10 }}
						yesIWantToUseGoogleMapApiInternals
						zoom={1}
					>
						<AnyReactComponent
							lat={latitude}
							lng={longitude}
							radio={15}
						/>
					</GoogleMapReact>
				</div>
			</React.Suspense >
		);
	}
}

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(MapGoogle);

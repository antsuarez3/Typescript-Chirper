import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Chirps from './OneChirp';
import ChirpDetails from './ChirpDetails';

const App: React.FC<IAppProps> = props => {
	
	return (
		<Router>
			<main className="container">
				<Switch>
					<Route exact path="/" component={Chirps} />
					<Route exact path="/" component={ChirpDetails} />
				</Switch>
			</main>
		</Router>
	);
};


export default App;

interface IAppProps { }


// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/chirps');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

// export default App;

//


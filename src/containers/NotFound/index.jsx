import * as react from 'react';
import { Link } from 'react-router-dom';

import { ContainerPage } from './styles';

function Home() {
	return( 
	<div><h1>Are you lost? </h1></div>,
	<Link to="/home">Go Back</Link>,
	<ContainerPage />
	);
}

export default Home;

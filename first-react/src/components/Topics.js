import React from 'react'
import {
	Link,
	Route,
} from 'react-router-dom'

function Topic ({ match }) {
	return (
		<div>
			<h3>{match.params.topicID}</h3>

		</div>
	)
				// <{match.params.topicID} />
}


export default function Topics ({ match }) {
	return (
		<div>
			<h2>TOPICS</h2>
			<ul>
				<li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
				<li><Link to={`${match.url}/components`}>Components with React</Link></li>
				<li><Link to={`${match.url}/props-vs-state`}>Props vs State</Link></li>				
			</ul>

			<hr />
		{ /* dynamic routing using a property */ }
			<Route path={`${match.path}/:topicID`} component={Topic} />
		{ /* when a topic does not come up */ }			
			<Route exact path={match.url} render={() => {
				return <h3>Please select a topic</h3>
			}} />

			<Route exact path={match.path} render={() => {
				return <h3>Please select a topic</h3>
			}} />

		</div>
	) 
}

/* 
			Hard coded
			<Route path='/topics/rendering' component={Topic} />
			<Route path='/topics/comopnents' component={Topic} />
			<Route path='/topics/props-vs-state' component={Topic} />
*/
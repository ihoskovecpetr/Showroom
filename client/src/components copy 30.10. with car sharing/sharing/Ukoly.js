import React from 'react';
import _ from 'lodash';

import Row from "./Row";


export default class Ukoly extends React.Component {
  
	   rendrujmapu() {
		   	const props = _.omit(this.props, 'todos')
			return _.map(this.props.users, (dataDB, index) => <Row key={index} {...dataDB} {...props} />);
	   }

    render() { 
        return ( 
			<tbody>
			{this.rendrujmapu()}   
			</tbody>                         
        );
	}
}


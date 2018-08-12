import React from 'react';
import Row from "./Row";
import _ from 'lodash';


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


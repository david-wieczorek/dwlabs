import React, { Component } from 'react';
import moment from 'moment';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


class MyComp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         hits: []
      };
   }

   componentDidMount() {
      fetch(API + DEFAULT_QUERY)
         .then(response => response.json())
         .then(data => this.setState({ hits: data.hits }));
   }

   render() {
      const { hits } = this.state;

      return (
         <div className="data-bloc">
            {hits.map(hit =>
               <section key={hit.objectID}>
                  <h4>
                     {hit.author} - {moment(hit.created_at).format('DD/MM/YYYY')}
                  </h4>
                  <a href={hit.url}>
                     {hit.title}
                  </a>
               </section>
            )}
         </div>
      );
   }
}

export default MyComp;

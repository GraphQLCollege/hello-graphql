import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const MY_QUERY = gql`
  query {
    recipient {
      name
    }
  }
`;

const Greeting = ({ to }) => <div className="greeting">Hello {to}</div>;

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }
    return <Greeting to={this.props.data.recipient.name} />;
  }
}

export default graphql(MY_QUERY)(App);

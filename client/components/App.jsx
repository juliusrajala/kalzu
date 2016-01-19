var App = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState(){
    return ({user: null})
  },
  componentDidMount(){
    console.log("Main app-component mounted.");

  },
  render(){
    return(

    );
  }
});
App = React.createClass({
  getInitialState(){
    return ({user: null})
  },
  componentDidMount(){
    console.log("Main app-component mounted.");

  },
  render(){
    return(
      <div className="app-root">
      <Header />
      {this.props.yield}
      <Footer />
      </div>
    );
  }
});
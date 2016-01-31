HourContainer = React.createClass({
  render(){
    console.log(this.props.current)
    console.log(this.props.hour);
    console.log(new Date().getHours()%24);
    return(
      <div className="hourContainer">
        <h3>
          PlaceHolder
        </h3>
      </div>
    );
  }
});
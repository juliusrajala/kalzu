Hourview = React.createClass({
  getNumber(){
    switch(this.props.hour){
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  },
  render(){
    return(
      <div className="hourView">
      <p>{this.props.hour}{this.getNumber()} hour.</p>
      </div>
    );
  }
});
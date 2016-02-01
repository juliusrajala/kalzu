Hourview = React.createClass({
  getTimeOfDay(){
    let currentTime = new Date();
    if(currentTime.getHours() % 24 < 12){
      return "AM";
    }else{
      return "PM";
    }
  },
  
  render(){
    return(
      <div className="hourView">
      <h3>{this.props.hour}{this.getTimeOfDay()}</h3>
      </div>
    );
  }
});
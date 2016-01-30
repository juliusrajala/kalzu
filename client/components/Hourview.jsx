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
      <p>{this.props.hour}{this.getTimeOfDay()}</p>
      </div>
    );
  }
});
HourRow = React.createClass({
  checkIfCurrent(){
    console.log("Checking if current")
    let currentTime = new Date();
    hours = currentTime.getHours();
    console.log(hours%12)
    if(hours%12 < 10 && hours%12 == this.props.label[0]){
      return true;
    }else if(hours%12 > 10 && hours%12 == this.props.label.substring(0,1)){
      return true;
    }else{
      return false;
    }
  },
  render(){
    return(
      <div className="hourRow">
          <Hourview hour={this.props.label}/>
          <div className="hourContents">
              <HourContainer hour={this.props.label} currentTime={this.checkIfCurrent()}/>
              <HourController/>
          </div>
      </div>
    );
  }
});
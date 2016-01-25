Dayview = React.createClass({
  hours: [
    "00:00-01:00",
    "01:00-02:00",
    "02:00-03:00",
    "03:00-04:00",
    "04:00-05:00",
    "05:00-06:00",
    "06:00-07:00",
    "07:00-08:00",
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00"
  ],
  renderHourViews(){
    console.log("Rendering hourviews");
    
  },
  render(){
    return(
      <div className="dayView">
      <h2>Today</h2>
      {this.hours.map(function(value){
        return <Hourview hour={value}/>
      })}
      </div>
    );
  }
});
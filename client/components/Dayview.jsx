var DataSet = [
  {label:"1:00", data: "Nope"},
  {label:"2:00", data: "Nope"},
  {label:"3:00", data: "Nope"},
  {label:"4:00", data: "Nope"},
  {label:"5:00", data: "Nope"},
  {label:"6:00", data: "Nope"},
  {label:"7:00", data: "Nope"},
  {label:"8:00", data: "Nope"},
  {label:"9:00", data: "Nope"},
  {label:"10:00", data: "Nope"},
  {label:"11:00", data: "Nope"},
  {label:"12:00", data: "Nope"}
];

Dayview = React.createClass({
  
  renderHourViews(){
    console.log("Rendering hourviews");
    
  },
  render(){
    return(
      <div className="dayView">
      <h2>Today</h2>
      {DataSet.map(function(set){
        return(
          <div className="hourRow">
          <Hourview hour={set.label}/>
          <HourContainer hour={set.label}/>
          </div>
        );
      })}
      </div>
    );
  }
});
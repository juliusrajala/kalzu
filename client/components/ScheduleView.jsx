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

ScheduleView = React.createClass({
  
  renderHourViews(){
    console.log("Rendering hourviews");
    
  },
  render(){
    return(
      <div className="scheduleView">
        <ul className="scheduleNavigation">
          <li className="scheduleNavigation"><h2>DAY</h2></li>
          <li className="scheduleNavigation"><h2>WEEK</h2></li>
          <li className="scheduleNavigation"><h2>MONTH</h2></li>
        </ul>
      {DataSet.map(function(set){
        return(
          <HourRow label={set.label}/>
        );
      })}
      </div>
    );
  }
});
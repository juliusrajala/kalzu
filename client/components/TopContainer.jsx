TopContainer = React.createClass({
  render(){
    let currentDate = new Date();
    return(
      <div className="alignerContainer">
        <div className="topContainer">
          <ScheduleView date={currentDate.getDate()}/>
        </div>
      </div>
    );
  }
});
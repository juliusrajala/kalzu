HourRow = React.createClass({
 render(){
  return(
   <div className="hourRow">
     <Hourview hour={this.props.label}/>
     <HourContainer hour={this.props.label}/>
     <HourController/>
   </div>
  );
 }
});
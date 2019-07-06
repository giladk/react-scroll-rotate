function ScrollPanel(props) {
    return <div id={props.target} style={{height:'200px',width:'100%',overflowY:'scroll',border:'1px solid gray'}}>
    <div style={{height:'800px',width:'100%'}}>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3><br/>
        <h3>Scroll me</h3>
    </div>
    </div>       
  }
  
export default ScrollPanel;
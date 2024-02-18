import './Header.css';

function Skill() {
    const divstyle={
        width:95,
        
    };
    return(
        <>
    <div className="main-section" id="Skill">
      <h2 className="heading-text">Skills</h2>
        <div className="skill">
          <b>HTML</b>
          <span>95%</span>
          <div>
            <span style={divstyle}></span>
          </div>
        </div>
        <div className="skill">
          <b>CSS</b>
          <span>89%</span>
          <div>
            <span style={divstyle}></span>
          </div>
        </div>
        <div className="skill">
          <b>JavaScript</b>
          <span>75%</span>
          <div>
            <span style={divstyle}></span>
          </div>
        </div>
        <div className="skill">
          <b>React js</b>
          <span>68%</span>
          <div>
            <span style={divstyle}></span>
          </div>
        </div>
      </div>
      {/* <div className="width-50">
        <div> 
         <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">React-65</div>
        </div>
        <div className="width-50">
          <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Jquery-85</div>
        </div>
        <div className="width-50">
          <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" >Node-65</div>
        </div>
        <div className="width-50">
          <div role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >Bootstrap-85</div>
        </div>
      </div> */}
  </>
  )
}

export default  Skill;
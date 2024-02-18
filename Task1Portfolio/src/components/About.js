import './About.css';
import IMG_preview from '../IMG_preview.png';

var About=()=>{

    return(
        <div className="main-section" id="About">
        <div className="container">
        <div className="width">
        <div className="about-us">
          <h2 className="heading-text">About</h2>
          <h7>Frontend React JS Developer with JavaScript expertise, and proficiency in ReactJS to create efficient and user-friendly web applications.Highly proficient in JavaScript and ReactJS, ensuring the development of responsive and interactive user interfaces.Proficiency in front-end technologies, including HTML5 and CSS3, for creating and styling web components.

          </h7>
          <div className="width-50">
            <img src={IMG_preview} width="400px" height="400px" alt=""/>
            </div>
          <div>
            <table cellspacing="8" cellpadding="8">
              <tr>
                <th>Name:</th>
                <td>Dhanashri Malavi</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>malvidhanashri24@gmail.com</td>
              </tr>
              <tr>
                <th>Study:</th>
                <td> B.E.E&TC</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>(+91)8830866959</td>
              </tr>
              <tr>
                <th>State:</th>
                <td>Maharashtra,India</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default  About;
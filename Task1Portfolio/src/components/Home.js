import './Home.css';
import IMG_preview from '../IMG_preview.png';


function Home() {
    return (
        <div className="container">
            <div className="width-50">
                <div className="banner-section">
                    <span className="span-col">Hello I'm</span>
                    <h1>Dhanashri<span className="span-col"> Malavi</span> </h1>
                    <h2>I am a passionate Frontend Developer from India.</h2>
                </div>
            </div>
            <div className="width-50">  <img src={IMG_preview} width="450px" height="450px"/></div>
        </div>
    );
}
export default Home;
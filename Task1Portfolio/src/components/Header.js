import './Header.css';
var Header=()=>{
    return(
        <div className="main-panel">
         <div className="width-33 logo">Port<span className="span-col">folio</span> </div>
         <div>
            <nav>
                <a href="#Home"> <span className="span-col">Home</span> </a>
                <a href="#About">About</a>
                <a href="#Skill">Skills</a>     
                <a href="#Project">Project</a>
                <a href="#Contact">Contact</a>
            </nav>
         </div>
        </div>
    )
}
export default Header; 
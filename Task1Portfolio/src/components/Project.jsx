import './Header.css';
import image from '../image.png';
import Capture from '../Capture.PNG';

function Project() {
    return (
            <>
                <div className="main-section" id="Project">
                <h2 class="heading-text">Project</h2>
                 <div class="width-50">
                   <div class="service-list">
                    <h3>Instance responsive Chatbot</h3>
                    <p>A chatbot is software that simulates human-like conversations with users via text messages on chat.
A chatbot is an artificial intelligence (AI) software that can simulate a conversation (or a chat) with a user in natural language through messaging applications, websites, mobile apps or through the telephone. Why are chatbots important? A chatbot is often described as one of the most advanced and promising expressions of interaction between humans and machines. However, from a technological point of view, a chatbot only represents the natural evolution of a Question Answering system leveraging Natural Language Processing. 
</p>
                    <div className="width-50"> <img src={image} width="400px" height="550px"/></div>
                  </div>
                </div>
           
               <div class="width-50">
                 <div class="service-list">
                 <h3>Coffee Shop Website</h3>
                 <p>
                 Cafe Management System is a comprehensive software solution designed for coffee shops to efficiently manage orders and overall cafe operations.
                 </p>
                 </div>
                 <div className="width-50"> <img src={Capture} width="750px" height="500px"/></div>
               </div>
              </div>
            </>
)}
export default Project;
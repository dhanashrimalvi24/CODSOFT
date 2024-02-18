import './Header.css';

var Contact=()=>{
    return(
        <div className="main-section"id="Contact">
            <div className="contact">
         <h2 className="heading-text">Contact with Us</h2>
             <div className="width-100">
        <form>
          <input type="text" placeholder="Full Name..."/>
          <input type="text" placeholder="Full Email Id..."/>
          <input type="text" placeholder="Full Mobile No..."/>
          <textarea placeholder="Enter Address..."></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="width-33">
        <h4>Address</h4>
        <p>Maharashtra,India</p>
      </div>
      <div className="width-33">
        <h4>Phone</h4>
        <p>+91 88 30 866 959</p>
      </div>
      <div className="width-33">
        <h4>Email</h4>
        <p>malvidhanashri24@gmail.com</p>
      </div>
    </div>
    </div>
    )
}
export default Contact;
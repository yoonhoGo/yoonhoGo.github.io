import React from "react"
import Max960 from "../../components/styled/Max960";

export default function Contact() {
  return (
    <article id="contact" className="section has-background-light">
      <Max960 className="container">
        <div className="box is-max-960 is-margin-center">
          <h1 className="title has-text-info">Contact</h1>
          <form name="contact" method="POST" data-netlify="true">
            <p className="field">
              <label className="label">Your Name:</label>
              <div className="control">
                <input className="input" type="text" name="name" />
              </div>
            </p>
            <p className="field">
              <label className="label">Your Email:</label>
              <div className="control has-icons-left">
                <input className="input" type="email" name="email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </p>
            <p className="field">
              <label className="label">Your Role:</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </div>
              </div>
            </p>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <p>
              <button type="submit" className="button is-primary">
                Send
              </button>
            </p>
          </form>
        </div>
      </Max960>
    </article>
  )
}

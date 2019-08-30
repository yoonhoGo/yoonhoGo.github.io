import React from "react"
import Max960 from "../../components/styled/Max960"

export default function Contact() {
  return (
    <article id="contact" className="section has-background-light">
      <Max960 className="container">
        <div className="box is-max-960 is-margin-center">
          <h1 className="title has-text-info">Contact</h1>
          {/* <!-- A little help for the Netlify bots if you're not using a SSG --> */}
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div data-netlify-recaptcha="true"></div>
            <div className="field">
              <label className="label">Your Name:</label>
              <div className="control">
                <input className="input" type="text" name="name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Your Email:</label>
              <div className="control has-icons-left">
                <input className="input" type="email" name="email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Your Role:</label>
              <div className="control">
                <div className="select">
                  <select name="role">
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
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

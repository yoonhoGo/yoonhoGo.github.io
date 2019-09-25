import React from "react"

export default function Contact() {
  return (
    <section id="contact" className="section has-background-light">
      <div className="container is-desktop">
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
              <div className="control has-icons-left">
                <input className="input" type="text" name="name" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
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
      </div>
    </section>
  )
}

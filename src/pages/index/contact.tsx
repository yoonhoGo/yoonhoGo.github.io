import React from "react"

export default function Contact() {
  return (
    <article id="contact" className="section has-background-light">
      <div className="container">
        <div className="box is-max-960 is-margin-center">
          <h1 className="title">Contact</h1>
          <form name="contact" method="POST" data-netlify="true">
            <p className="field">
              <label className="label">Your Name:</label>
              <div className="control">
                <input className="input" type="text" name="name" />
              </div>
            </p>
            <p className="field">
              <label className="label">Your Email:</label>
              <div className="control">
                <input className="input" type="email" name="email" />
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
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </article>
  )
}

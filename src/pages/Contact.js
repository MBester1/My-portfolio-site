import React from "react";
import { ExternalLink } from "react-external-link";

function ContactPage() {
  return (
    <div>
      <section>
        <p>Contact page</p>
        <ExternalLink
          href="mailto:michaelbesterguitar@gmail.com?body=My custom mail body"
          style={{ color: "inherit", textDecoration: "inherit" }}
          className="btn"
        >
          <span>@</span>
        </ExternalLink>
      </section>
    </div>
  );
}

export default ContactPage;

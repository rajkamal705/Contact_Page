import React from "react";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import Data from "./Data";

function Contact() {
  return (
    <>
      <section className="mt-20 px-20 py-10">
        <div className="p-10">
          <div className="flex justify-evenly">
            <ContactDesc
              key={Data[0].id}
              head={Data[0].descHead}
              body={Data[0].descBody}
            />

            <ContactForm />
          </div>

          <ContactLinks />
        </div>
      </section>
    </>
  );
}

export default Contact;

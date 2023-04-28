const contacts = document.querySelectorAll('#contact-list li'); // this is connected to the contact list for all in li
   
for (let i = 0; i < contacts.length; i++) {
  const contact = contacts[i]; // contacts hold all the contacts that are in the list
  const details = contact.querySelector('.contact-details'); // this selects elements with name in orange
  // which is a child of the contact class
  const toggle_Button = document.querySelector('button'); // button is not apart of the details of contact
  const phone = details.querySelector('.contact-phone'); // this and email buth get assigned to the details element
  const email = details.querySelector('.contact-email');

  phone.style.display = 'none'; // this turns on emails to start
  email.style.display = 'block';

  toggle_Button.addEventListener('click', () => { // event listner like in java
    if (phone.style.display == 'none') {  // if phone is equal to none 
      phone.style.display = 'block';    // then it will turn on phone
      email.style.display = 'none';    // and hide emails
      toggle_Button.textContent = 'Phone number';  
    } else { // if phone is being displayed then it will do the opposite
      phone.style.display = 'none';  
      email.style.display = 'block';
      toggle_Button.textContent = 'Email adress'; 
    }
  });
}

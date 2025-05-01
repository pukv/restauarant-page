export function loadContactPage() {
  const content = document.querySelector("#content");

  content.innerHTML = "";
  document.body.classList.remove("bg-image-main");
  document.body.classList.add("bg-image");

  // Working Hours Seciton
  const workingHoursText = document.createElement("h2");
  workingHoursText.textContent = "Working Hours";
  content.append(workingHoursText);

  const wrkHours = document.createElement("p");
  wrkHours.innerText = `
  Monday - Friday
  11:00 - 24:00

  Saturday
  11:00 - 23:30

  Sunday
  14:00 - 23:00`;
  content.append(wrkHours);

  // Contact Info Section
  const contactInfo = document.createElement("h2");
  contactInfo.textContent = "Contact Information";
  content.append(contactInfo);

  // Address
  const address = document.createElement("h3");
  address.textContent = "Address:";
  content.append(address);
  const addressText = document.createElement("p");
  addressText.textContent = "Libeartion BLVD 420, Republic";
  content.append(addressText);

  // Phone Number
  const phone = document.createElement("h3");
  phone.textContent = "Phone Number:";
  content.append(phone);
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "+12 345 6789";
  content.append(phoneNumber);

  // Email
  const emailText = document.createElement("h3");
  emailText.textContent = "Email:";
  content.append(emailText);
  const mailText = document.createElement("p");
  mailText.textContent = "notfake@republic.com";
  content.append(mailText);

  const notificationText = document.createElement("h2");
  notificationText.textContent = `Feel free to shoot us an email as we're currently not on any social media!`;
  content.append(notificationText);
}

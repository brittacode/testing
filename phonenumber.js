function validatePhoneNumber(phoneNumber) {
  return (
    phoneNumber.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/) !==
    null
  );
}

module.exports = validatePhoneNumber;

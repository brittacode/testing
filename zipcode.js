function validateZipCode(zipCode) {
  return zipCode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/) !== null;
}

module.exports = validateZipCode;

function checkPassword(password, lang) {
    let message = "";
    const validMinLen = password.length > 7;
    const validMaxLen = password.length < 17;
    const valid = validMinLen & validMaxLen;

    if (valid) {
      message = "Passwort okay";
    } else {
      message = "Passwort zu kurz oder zu lang";
    }
    return { valid: valid, message: message };
  }

  let response = checkPassword("123");
  console.log(response.valid, response.message);
  console.log(checkPassword("12345678"));
  console.log(checkPassword("1234567"));
  console.log(checkPassword("1234567890123456789"));


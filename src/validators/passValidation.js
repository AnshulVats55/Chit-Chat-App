function passwordCheck(pwd) {

  let message ={
    text:"",
    status:false
  }
  const check_digit = function (pwd) {
    return /\d/.test(pwd);
  };
  const check_upperCase = function (pwd) {
    return /[A-Z]/.test(pwd);
  };
  const check_loweCase = function (pwd) {
    return /[a-z]/.test(pwd);
  };
  const check_special_Char = function (pwd) {
    return /[~!@#$%^&]/.test(pwd);
  };
  const check_white_space = function (pwd) {
    return /[\s]/.test(pwd);
  };
  const check_length = function (pwd) {
    if (pwd.length >= 6) return true;
    return false;
  };
  // console.log(check_digit("asf3"))
  // console.log(check_length('asfjofd1234'))

  if (
    check_digit(pwd) &&
    check_upperCase(pwd) &&
    check_loweCase(pwd) &&
    check_special_Char(pwd) &&
    !check_white_space(pwd) &&
    check_length(pwd)
  ) {
      message ={
        text:"Your password is strong",
        status:true
      }
  } 
  else {
    message.status = false
    if (!check_digit(pwd)) {
      message.text = "Password must have at least one digit"
    }
    if (!check_loweCase(pwd)) {
      message.text = "Password must have at least one lowerCase";
    }
    if (!check_upperCase(pwd)) {
      message.text = "Password must have at least one upperCase";
    }
    if (!check_special_Char(pwd)) {
      message.text = "Password must have at least one non-alphanumeric";
    }
    if (!check_length(pwd)) {
      message.text = "Password is too short";
    }
    if (check_white_space(pwd)) {
      message.text = "Password must not contain any white space";
    }
  }

  return message;
}

console.log(passwordCheck('1801061Pi '))

 function verifyEmail (value) {
  const emailRex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRex.test(value)) {
    return true
  }
  return false
}

 function verifyMobileNumber (value) {
  const mobRex = /^[0-9]{10}$/
  if (mobRex.test(value)) {
    return true
  }
  return false
}


export {verifyEmail,verifyMobileNumber}
const validateUsr = username => /^([a-z]|\d|_){4,16}$/.test(username)
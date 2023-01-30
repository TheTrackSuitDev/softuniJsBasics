function password(input) {
    let passReceived = input[0];
   
    if (passReceived === "s3cr3t!P@ssw0rd") {
      console.log("Welcome")
    }  else {
        console.log("Wrong password!")
    }
  }
  password (["s3cr3t!P@ss"])
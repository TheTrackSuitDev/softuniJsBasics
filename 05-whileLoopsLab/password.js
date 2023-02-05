function password(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let truePassword = input[index];
    index++;
    let password = input[index];
    index++;
    while (password !== truePassword) {
        password = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}
password(["Gosho",
"secret",
"secret"])
function sequence(input) {
    let mainNum = Number(input[0]);
    let startStep = 1;
    while (startStep <= mainNum) {
        console.log(startStep);
        startStep = startStep * 2 + 1;
    }
}
sequence(["31"])

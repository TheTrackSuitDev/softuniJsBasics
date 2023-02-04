function hospital(input) {
    let period = Number(input[0]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    for (let i = 1; i <= period; i++) {
        let currentDayPatients = Number(input[i]);
        if (i % 3 === 0 && untreated > treated) {
            doctors++
        }if (currentDayPatients > doctors) {
            untreated += currentDayPatients - doctors;
            treated += doctors;
        } else {
            treated += currentDayPatients;
        }
        
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}
hospital(["6","25","25","25","25","25","2"])
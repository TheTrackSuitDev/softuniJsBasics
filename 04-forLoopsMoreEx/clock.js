function clock() {
    for (let index = 0; index < 24; index++) {
        let h = index
        for (let index2 = 0; index2 < 60; index2++) {
            let m = index2;
            console.log(`${h} : ${m}`);
        }
    }
}        
clock()
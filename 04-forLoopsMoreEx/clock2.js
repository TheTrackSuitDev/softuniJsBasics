function clock() {
    for (let index = 0; index < 24; index++) {
        let h = index
        for (let index2 = 0; index2 < 60; index2++) {
            let m = index2;
            for (let index3 = 0; index3 < 60; index3++) {
                let s = index3;
                console.log(`${h} : ${m} : ${s}`);;
                
            }
        }
    }
}        
clock()
function summerOutfit(input) {
    let temperature = Number(input[0]);
    let time = input[1];
    let outfit = "";
    let shoes = "";
    
    if (temperature >= 10 && temperature <= 18) {
        switch (time) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;  
            default:
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else if (temperature > 18 && temperature <= 24){
        switch (time) {
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;  
            default:
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    } else {
        switch (time) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;  
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            default:
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    
    console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["28",
"Evening"])
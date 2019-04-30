console.log ("I'm here");

// This is a factory function. It returns a new object every time.
// const createLocation = (name, address, type) => ({
//     "businessType": type,
//     "businessName": name,
//     "address": address
// })

// const kennel = createLocation("Bow Wow Kennels", "100 Infinity Way", "Animal Boarding")
// > { "businessType": "Animal Boarding", "businessName": "Bow Wow Kennels", "address": "100 Infinity Way" }

// Practice Doctors
// Lightning Exercise 1: Write a factory function that creates an object that 
// represents a doctor. The function should accept three arguments.

// 1. Doctor's name
// 2. Specialty (Oncologist, pediatrician, etc...)
// 3. Address of practice

const createDoctorObject = (name, speciality, address) => ({
    "doctorName": name,
    "doctorSpeciality": speciality,
    "doctorAddress": address
})

const doctor1 = createDoctorObject("Dr. Sam Bobam", "ENT", "123 Main Street");

console.log(doctor1);

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// 1. Pet name
// 2. Pet breed

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const createPet = (name, breed) => ({
    "petName": name,
    "petBreed": breed
})

const pet1 = createPet("Zito", "Great Dane");

console.log(pet1);

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const bowWowKennels = [];
bowWowKennels.push(createPet("Zoe", "Dachshund"));
bowWowKennels.push(createPet("Abbey", "Bird dog"));
bowWowKennels.push(createPet("Frederick", "Dachshund"));

console.log(bowWowKennels);


// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.

// Create an array for each of these record labels.

jumpStopRecords = [];
chattenRecords = [];
polarRecords = [];

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). 

const createArtist = (name, genre, age) => ({
    "artistName": name,
    "artistGenre": genre,
    "artistAge": age
});

const artist1 = createArtist("Honky Tom", "Country", 40);

console.log(artist1)


// Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
chattenRecords.push(createArtist("Bruce Atkins", "country", 23));
console.log(chattenRecords);
// Jensen Brown is a Pop artist and is 20 years old
polarRecords.push(createArtist("Jensen Brown", "Pop", 20));
console.log(polarRecords);
// Dre Funkz is a Funk artist and is 25 years old
jumpStopRecords.push(createArtist("Dre Funkz", "Funk", 25));
console.log(jumpStopRecords);
// Dusta Grimes is a Rap artist and is 21 years old
jumpStopRecords.push(createArtist("Dusta Grimes", "Rap", 21));
console.log(jumpStopRecords);
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
chattenRecords.push(createArtist("Bart Danielson", "Bluegrass", 23));
console.log(chattenRecords);
// Avilee Dallas is a Country artist and is 19 years old
chattenRecords.push(createArtist("Avilee Dallas", "Country", 19));
console.log(chattenRecords);
// Austin Kinkaid is a Pop artist and is 22 years old
polarRecords.push(createArtist("Austin Kinkaid", "Pop", 22));
console.log(polarRecords);
// Loyoncé Branis is a Rap artist and is 27 years old
jumpStopRecords.push(createArtist("Loyonce Branis", "Rap", 27));
console.log(jumpStopRecords);

console.log(jumpStopRecords);
console.log(polarRecords);
console.log(chattenRecords);

const rap = document.querySelector(".jumpStopDiv");
jumpStopRecords.forEach(element => {
    rap.innerHTML += `
    <div>
    <p>Artist Name:</p>${element.artistName}</p>
    <p>Artist Genre: ${element.artistGenre}</p>
    <p>Artist Age: ${element.artistAge}</p>
    </div>`;
});


const country = document.querySelector(".chattenDiv");
chattenRecords.forEach(element => {
    country.innerHTML += `
    <div>
    <p>Artist Name:</p>${element.artistName}</p>
    <p>Artist Genre: ${element.artistGenre}</p>
    <p>Artist Age: ${element.artistAge}</p>
    </div>`;
});

const pop = document.querySelector(".polarDiv");
polarRecords.forEach(element => {
    pop.innerHTML += `
    <div>
    <p>Artist Name:</p>${element.artistName}</p>
    <p>Artist Genre: ${element.artistGenre}</p>
    <p>Artist Age: ${element.artistAge}</p>
    </div>`;
});

function saveArtist(obj) {
    return fetch("http://localhost:8088/artist",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json());
};

const saveButton = document.getElementById("btn-saveArtist")
console.log(saveButton);
saveButton.addEventListener("click", event => {
    const inputArtistName = document.querySelector("#artist_name").value;
    const inputArtistGenre = document.querySelector("#artist_genre").value;
    const inputArtistAge = document.querySelector("#artist_age").value;

    const newArtistObj = {
        name: inputArtistName,
        genre: inputArtistGenre,
        age: inputArtistAge
    };

    console.log(newArtistObj);
        
    saveArtist(newArtistObj)
    .then(parsedResult => {
        console.log("What is the result", parsedResult);
    });
    
});



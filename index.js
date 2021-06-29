const data = [
    {
        "id": "1",
        "name": "Lura Senger",
        "email": "Xander_Collier@yahoo.com"
    },
    {
        "id": "2",
        "name": "Wilburn Weber",
        "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
        "id": "3",
        "name": "Tyrique Hahn",
        "email": "Juston.Altenwerth@yahoo.com"
    },
    {
        "id": "4",
        "name": "Lenny Bailey",
        "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
        "id": "5",
        "name": "Vladimir Keeling",
        "email": "Louisa_Walsh18@hotmail.com"
    },
    {
        "id": "6",
        "name": "Kellie Crona",
        "email": "Chandler_Abernathy@yahoo.com"
    },
    {
        "id": "7",
        "name": "Carolina White",
        "email": "Royal50@hotmail.com"
    },
    {
        "id": "8",
        "name": "Alfredo Conn",
        "email": "Clarabelle34@hotmail.com"
    },
    {
        "id": "9",
        "name": "Stan Shanahan",
        "email": "Lamar.McClure@hotmail.com"
    },
    {
        "id": "10",
        "name": "Marvin Fay",
        "email": "Osbaldo58@hotmail.com"
    },
    {
        "id": "11",
        "name": "Torrance Rau",
        "email": "Orin45@gmail.com"
    },
    {
        "id": "12",
        "name": "Harold Gutmann MD",
        "email": "Alyce.Stracke37@yahoo.com"
    },
    {
        "id": "13",
        "name": "Taryn Torphy",
        "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
        "id": "14",
        "name": "Bryana Lang",
        "email": "Tatum.Ullrich@yahoo.com"
    },
    {
        "id": "15",
        "name": "Nyasia Green DDS",
        "email": "Dino83@gmail.com"
    },
    {
        "id": "16",
        "name": "Nasir Gerhold",
        "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
        "id": "17",
        "name": "Raymundo Ritchie PhD",
        "email": "Antwan.Schoen15@yahoo.com"
    },
    {
        "id": "18",
        "name": "Delmer Marvin",
        "email": "Kiera62@yahoo.com"
    },
    {
        "id": "19",
        "name": "Rachel Wilkinson",
        "email": "Foster_Conroy@gmail.com"
    },
    {
        "id": "20",
        "name": "Gladys Howell",
        "email": "Constance.Labadie10@yahoo.com"
    },
    {
        "id": "21",
        "name": "Ciara Klocko",
        "email": "Harvey76@yahoo.com"
    },
    {
        "id": "22",
        "name": "Quentin O'Kon",
        "email": "Amely_Cummings2@yahoo.com"
    },
    {
        "id": "23",
        "name": "Ms. Gabriella Kunde",
        "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
        "id": "24",
        "name": "Gerald Reilly",
        "email": "Lia_Konopelski@gmail.com"
    },
    {
        "id": "25",
        "name": "Brody Carter I",
        "email": "Colten.Wilderman90@hotmail.com"
    },
    {
        "id": "26",
        "name": "Alanis Klocko",
        "email": "Johathan.Champlin69@gmail.com"
    },
    {
        "id": "27",
        "name": "Caroline Miller",
        "email": "Delaney.Kozey74@gmail.com"
    },
    {
        "id": "28",
        "name": "Ms. Merritt McClure",
        "email": "Wendy.Zieme@gmail.com"
    },
    {
        "id": "29",
        "name": "Jovani Schoen",
        "email": "Norval_Zieme@hotmail.com"
    },
    {
        "id": "30",
        "name": "Berniece Bradtke",
        "email": "Okey.Fisher39@hotmail.com"
    },
    {
        "id": "31",
        "name": "Hanna Gottlieb",
        "email": "Edna62@hotmail.com"
    },
    {
        "id": "32",
        "name": "Christiana Bergnaum",
        "email": "Donnie.Paucek22@gmail.com"
    },
    {
        "id": "33",
        "name": "Reid Stehr",
        "email": "Hiram69@gmail.com"
    },
    {
        "id": "34",
        "name": "Evans Ward",
        "email": "Liliane72@hotmail.com"
    },
    {
        "id": "35",
        "name": "Miss Enos Davis",
        "email": "Kolby.Grady@hotmail.com"
    },
    {
        "id": "36",
        "name": "Mathew Lueilwitz",
        "email": "Mariah.Hagenes@yahoo.com"
    },
    {
        "id": "37",
        "name": "Romaine Robel",
        "email": "Sheila19@yahoo.com"
    },
    {
        "id": "38",
        "name": "Immanuel Aufderhar",
        "email": "Aileen32@hotmail.com"
    },
    {
        "id": "39",
        "name": "Julius Reilly Jr.",
        "email": "Santa89@yahoo.com"
    },
    {
        "id": "40",
        "name": "Linnea Borer",
        "email": "Jarrett_Hegmann2@hotmail.com"
    }
]

let currentPage = 1;
let previousPage = 1;

function display(cp) {
    let cardrow = document.getElementById('card-row')
    cardrow.innerHTML = "";
    for (let i = 6 * (cp - 1); i < (6 * (cp - 1)) + 6 && i < data.length; i++) {

        let column = document.createElement('div');
        column.className = 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4';

        let card = document.createElement('div');
        card.className = 'card'

        let img = document.createElement('img');
        img.alt = 'Profile Image';
        img.src = 'user.png';

        let cardbody = document.createElement('div');
        cardbody.className = 'card-body';

        let cardtitle = document.createElement('h5');
        cardtitle.className = 'card-title';
        cardtitle.innerText = data[i].name;

        let cardsubtitle = document.createElement('h6');
        cardsubtitle.className = 'card-subtitle';
        cardsubtitle.innerText = data[i].email;

        let button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.innerText = 'View Profile';

        cardbody.append(cardtitle, cardsubtitle, button);
        card.append(img, cardbody);
        column.append(card);
        cardrow.append(column);
    }
}
display(1);
setActive(1,1);

let pages = document.querySelectorAll('a');
for (page of pages) {
    page.addEventListener('click', (event) => {
        let key = event.target.innerText;

        if (key == 'Next') {
            if (currentPage == 7)
                key = 7;
            else
                key = +currentPage + +1;
            previousPage = currentPage;
            currentPage = key;
            display(currentPage);
            setActive(currentPage, previousPage);
        }
        else if (key == 'Previous') {
            if (currentPage == 1)
                key = 1;
            else
                key = +currentPage - +1;
            previousPage = currentPage;
            currentPage = key;
            display(currentPage);
            setActive(currentPage, previousPage);
        }
        else if (key == 'First') {
            key = 1;
            previousPage = currentPage;
            currentPage = key;
            display(currentPage);
            setActive(currentPage, previousPage);
        }
        else if (key == 'Last') {
            key = 7;
            previousPage = currentPage;
            currentPage = key;
            display(currentPage);
            setActive(currentPage, previousPage);
        }
        else {
            previousPage = currentPage;
            currentPage = key;
            display(currentPage);
            setActive(currentPage, previousPage);
        }
    });
}

function setActive(currentPage, previousPage) {
    let activepage = document.getElementById('li' + currentPage);
    let earlierActivePage = document.getElementById('li' + previousPage);
    earlierActivePage.classList.remove('active');
    activepage.classList.add('active');
    if(currentPage == 1){
        document.getElementById('li-previous').classList.add('disabled');
        document.getElementById('li-first').classList.add('disabled');
    }
    else if(previousPage == 1){
        document.getElementById('li-previous').classList.remove('disabled');
        document.getElementById('li-first').classList.remove('disabled');
    }
    if(currentPage == 7){
        document.getElementById('li-next').classList.add('disabled');
        document.getElementById('li-last').classList.add('disabled');
    }
    else if(previousPage == 7){
        document.getElementById('li-next').classList.remove('disabled');
        document.getElementById('li-last').classList.remove('disabled');
    }
}













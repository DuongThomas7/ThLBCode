const firstNameSearch = document.getElementById("firstName");
const lastNameSearch = document.getElementById("lastName");
const search = document.getElementById("findActive");
const results = document.getElementById("results");
const activePage = document.getElementById("activePage");
const activeCheck = document.getElementById("makeActivePage")
let activeThirdCheck = false;


function addActive(lineNumber, firstName, lastName, lineName, className, role) {
    this.lineNumber = lineNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.lineName = lineName;
    this.name = lineNumber + ' ' + firstName + ' ' + lastName;
    this.className = className;
    this.role = role;
}

function makeDataTableHeader(){
    const dataTable = document.createElement("table");
    const dataRowHeader = document.createElement('tr');
    const dataHeaderName = document.createElement('th');
    const dataHeaderLineName = document.createElement('th');
    const dataHeaderRole = document.createElement('th');
    dataHeaderName.textContent = "Name";
    dataHeaderLineName.textContent = "Line Name";
    dataHeaderRole.textContent = "Positions Held";

    dataRowHeader.append(dataHeaderName, dataHeaderLineName, dataHeaderRole);
    dataTable.appendChild(dataRowHeader);
    results.appendChild(dataTable);

}

function makeDataTable(person){
    const dataTable = document.querySelector("table");
    const dataRow = document.createElement('tr');
    const dataName = document.createElement('td');
    const dataLineName = document.createElement('td');
    const dataRole = document.createElement('td');
    
    dataName.textContent = person.name;
    dataLineName.textContent = person.lineName;
    dataRole.textContent = person.role;

    dataRow.append(dataName, dataLineName, dataRole);
    dataTable.appendChild(dataRow);
}

function makeActivePage(active) {
    const activeBrotherHighlight = document.createElement("div");
    const activeBrotherImage = document.createElement("img");
    const activeBrotherHighlightName = document.createElement("h1");
    const activeBrotherHighlightRole = document.createElement("p");
    const activeBrotherHighlightClass = document.createElement("p")
    
    activeBrotherHighlight.classList.toggle("activeBrother");

    activeBrotherHighlightName.textContent = active.name;
    activeBrotherHighlightRole.textContent = active.role;
    activeBrotherHighlightClass.textContent = active.className;

    activeBrotherHighlight.append(activeBrotherHighlightName, activeBrotherHighlightClass, activeBrotherHighlightRole);
    if (activeThirdCheck) {
        console.log(active);
        const activeBrotherRow = document.createElement("div");
        activeBrotherRow.classList.toggle("activeRow");
        activeBrotherRow.appendChild(activeBrotherHighlight);
        activePage.appendChild(activeBrotherRow);
        activeThirdCheck = false;
    }
    activePage.lastChild.appendChild(activeBrotherHighlight);
}

// Array that holds all the current actives
let activeList = [];

//First name, Last name, Linename, Position held
const thomasDuong = new addActive("#98", "Thomas", "Duong", "Ech0", "Pi Prodigies", "Webmaster");
const lorenzSapanhila = new addActive("#91","Lorenz", "Sapanhila", "Endeavor", "Operation Omicron", "Secretary");
const justinSardon = new addActive("#92","Justin", "Sardon", "Imperius", "Operation Omicron", "President");
const elanAtar = new addActive("#96", "Elan", "Atar", "Aegis", "Pi Prodigies", "Vice President Internal");
const rickyZheng = new addActive("#100", "Ricky", "Zheng", "Braveheart", "Pi Prodigies", "Alumni Chair");
const andreiJao = new addActive("#101","Andrei", "Jao", "Drake.0", "Death Rho", "Vice-President External,Marketing")
const joshOh = new addActive("#102", "Josh", "Oh", "Waki.zashi", "Death Rho", "Marketing");
const tonyNguyen = new addActive("#103","Tony", "Nguyen", "KO.i", "Operation Omicron", "President");
const joshPalafox = new addActive("#105", "Josh", "Palafox", "Cable", "Sigma Supremacy", "Recruitment");
const zachTolentino = new addActive("#106", "Zach", "Tolentino", "Vulcan", "Sigma Supremacy", "//");
const josefCalaunan = new addActive("#107", "Josef", "Calaunan", "Quicksilver", "Tau Takeover", "//");
const edgarDaipuu = new addActive("#108", "Edgar", "Daipuu", "iNTERVENTION", "Tau Takeover", "//");
const aaronGriffith = new addActive("#109", "Aaron", "Griffith", "Kilo", "Tau Takeover", "//");
const tommyKang = new addActive("#111", "Tommy", "Kang", "WeightLess", "Tau Takeover", "Webmaster Shadow");
const dannyLe = new addActive("#112", "Danny", "Le", "Arm0r", "Tau Takeover", "//");
const eljayRaya = new addActive("#114", "Eljay", "Raya", "dK", "Tau Takeover", "Cultural Chair");
const kevinSon = new addActive("#115", "Kevin", "Son", "aang", "Tau Takeover", "Social Chair");
const ryanTorre = new addActive("#116", "Ryan", "Torre", "Enma", "Tau Takeover", "Fundraising Chair");

activeList.push(thomasDuong);
activeList.push(lorenzSapanhila);
activeList.push(justinSardon);
activeList.push(elanAtar);
activeList.push(rickyZheng);
activeList.push(andreiJao);
activeList.push(joshOh);
activeList.push(tonyNguyen);
activeList.push(joshPalafox);
activeList.push(zachTolentino);
activeList.push(josefCalaunan);
activeList.push(edgarDaipuu);
activeList.push(aaronGriffith);
activeList.push(tommyKang);
activeList.push(dannyLe);
activeList.push(eljayRaya);
activeList.push(kevinSon);
activeList.push(ryanTorre);




search.addEventListener("click", () => {
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }
    makeDataTableHeader();
    
    //console.log(firstNameSearch.value);
    //console.log(firstNameSearch.value + lastName.value);
    for (i = 0; i < activeList.length; i++){
        if (firstNameSearch.value.toLowerCase() == activeList[i].firstName.toLowerCase()) {
            if (lastNameSearch.value.toLowerCase() == activeList[i].lastName.toLowerCase()) {
                makeDataTable(activeList[i]);
                break;
            }
            //const output = document.createElement('p');
            //output.textContent = activeList[i].role;
            //results.appendChild(output);
            else {
                makeDataTable(activeList[i]);
            }
            console.log(activeList[i].name);
            console.log(activeList[i].role);
            
        }
    }
})

activeCheck.addEventListener("click", () => {
    //console.log(activeList);
    for (actives in activeList) {
        //console.log(activeList[actives]);
        if (actives % 3 == 0) {
            activeThirdCheck = true;
        }
        makeActivePage(activeList[actives]);
        //console.log(actives);
    }
})
class Seekers {

    constructor() {
        this.getData = this.getData.bind(this);
        this.hireEmployee = this.hireEmployee.bind(this);
    };

    getData() {

        let data = document.querySelector(".data");
        let jobSeekers = document.createElement("div");
        jobSeekers.className = "jobSeekers";

        jobSeekers.innerHTML =
            `<div>${this.name} (${this.age}) ${this.type} <button class="hire">hire</button> </div>`

        data.append(jobSeekers);

        let hireBtn = jobSeekers.querySelector(".hire");
        hireBtn.addEventListener("click", this.hireEmployee);
    };

    hireEmployee(e) {

        e.target.setAttribute('disabled','true');
        let team = document.querySelector(".team");
        let myTeam = document.createElement("div");
        myTeam.className = "myTeam";

        myTeam.innerHTML =
            `<div>${this.name}(${this.type}) at ${this.rate} USD / hour</div>`

        team.append(myTeam);
    };
};

export default Seekers;
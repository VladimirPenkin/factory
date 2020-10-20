import Team from "./application/team";

document.addEventListener('DOMContentLoaded', () => {

    fetch("http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2")
        .then(res => res.json())
        .then(data => {
            //console.log(data);

            data.forEach(item => {

                const hr = new Team();

                const hireStaff = hr.makeTeam({
                    name: item.name,
                    age: item.age,
                    type: item.type,
                    rate: item.rate
                });

               hireStaff.getData();
            
            });
        });
});
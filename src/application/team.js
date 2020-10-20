import Backend from "./backend";
import Frontend from "./frontend";
import Project from "./project";
import Design from "./design";

class Team {

    makeTeam(seekers) {

        let SeekersClass = null;

        switch (seekers.type) {
            case "backend": SeekersClass = Backend;
                break;
            case "frontend": SeekersClass = Frontend;
                break;
            case "project": SeekersClass = Project;
                break;
            case "design": SeekersClass = Design;
                break;
            default: console.log("Error");
        };

        return new SeekersClass(seekers);
    };
};

export default Team;
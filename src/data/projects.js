// global dependencies
import { v4 as uuidv4 } from 'uuid';

//local dependencies

// import R8_logo from "../images/r8_logo.svg";

const projects = {
    items: [
        {
            id: uuidv4(),
            projectUrlName: "R8-Henrik-Ibsens-gate",
            projectName: "Henrik Ibsens gate 40-42",
            projectPicture: require('../images/building_facade.png'),
            projectDescription: "{R8_logo}",
            projectMatterportLink: "https://my.matterport.com/show/?m=YeX1Zx8Ufju&brand=0&play=1&qs=1&ts=5&title=0",
            customer: "R8 Group",
            customerLogo: require('../images/r8_logo.svg'),
            customerPage: "https://r8property.no/",

            projectPosition: "//www.arcgis.com/apps/Embed/index.html?webmap=34579c96ecda42d09f96bec0ad26ad45&extent=10.7249,59.925,10.7299,59.9151&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=dark&marker=10.7249;59.9151;;;;R8%20Property",
        },
    ],
};

export default projects;

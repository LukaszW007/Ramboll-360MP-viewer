// global dependencies
import { v4 as uuidv4 } from 'uuid';

//local dependencies

// import R8_logo from "../images/r8_logo.svg";

const projects = {
    items: [
        {
            id: uuidv4(),
            projectUrlName: "R8-Inkognitogata",
            projectName: "Inkognitogata 33",
            projectPicture: require('../images/Inkognitogata.png'),
            projectDescription: "Inkognitogata 33, Oslo",
            projectMatterportLink: "https://mpembed.com/show/?m=Jbdfqv6zcYC&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png&ga=UA-170631170-2",
            customer: "R8 Group",
            customerLogo: require('../images/r8_logo.svg'),
            customerPage: "https://r8property.no/",

            projectPosition: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.97552088736!2d10.720822863126436!3d59.91595360570134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd5178dacff%3A0x65afc93054810a3e!2sAdokatfirmaet%20Cappelen%20%26%20Krefting%20DA!5e0!3m2!1sen!2sno!4v1610362188039!5m2!1sen!2sno",
        },
        {
            id: uuidv4(),
            projectUrlName: "R8-Henrik-Ibsens-gate",
            projectName: "Henrik Ibsens gate 40-42",
            projectPicture: require('../images/building_facade.png'),
            projectDescription: "Henrik Ibsens gate 40-42, Oslo",
            projectMatterportLink: "https://mpembed.com/show/?m=YeX1Zx8Ufju&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png&ga=UA-170631170-2",
            customer: "R8 Group",
            customerLogo: require('../images/r8_logo.svg'),
            customerPage: "https://r8property.no/",

            projectPosition: "//www.arcgis.com/apps/Embed/index.html?webmap=34579c96ecda42d09f96bec0ad26ad45&extent=10.7249,59.925,10.7299,59.9151&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=dark&marker=10.7249;59.9151;;;;R8%20Property",
        },
        {
            id: uuidv4(),
            projectUrlName: "Hole-Herredshus",
            projectName: "Hole Herredshus",
            projectPicture: require('../images/Hole-Herredshus-Dollhouse-View.jpg'),
            projectDescription: "Viksveien 30, 3530 Røyse",
            projectMatterportLink: "https://mpembed.com/show/?m=RKixLovmNJM&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png",
            customer: "Hole kommune",
            customerLogo: require('../images/kommunevapen.png'),
            customerPage: "https://www.hole.kommune.no/",

            projectPosition: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7960.265956293222!2d10.2785643!3d60.0802691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcebda5b280d58a68!2sHole%20municipality!5e0!3m2!1spl!2sno!4v1592498164342!5m2!1spl!2sno"
        },
        {
            id: uuidv4(),
            projectUrlName: "Vik-skole",
            projectName: "Energisentral Vik skole",
            projectPicture: require('../images/Vik-skole-google-street.png'),
            projectDescription: "Viksveien 27, 3530 Røyse",
            projectMatterportLink: "https://mpembed.com/show/?m=5dfw4i8qqMV&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png",
            customer: "Hole kommune",
            customerLogo: require('../images/kommunevapen.png'),
            customerPage: "https://www.hole.kommune.no/",

            projectPosition: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990.1536599700135!2d10.280063089086132!3d60.07882478196126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e1c53d76a78c52d!2sVik%20School!5e0!3m2!1spl!2sno!4v1592551951342!5m2!1spl!2sno"
        },
        {
            id: uuidv4(),
            projectUrlName: "Vikstunet-Ventilasjon",
            projectName: "Vikstunet Ventilasjon",
            projectPicture: require('../images/Vikstunet-Ventilasjon-Dollhouse-View.jpg'),
            projectDescription: "Viksveien 29, 3530 Røyse",
            projectMatterportLink: "https://mpembed.com/show/?m=xhdKFs53H1r&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png",
            customer: "Hole kommune",
            customerLogo: require('../images/kommunevapen.png'),
            customerPage: "https://www.hole.kommune.no/",

            projectPosition: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.0679507500734!2d10.278971516102736!3d60.080244881927854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464105d1b335d90d%3A0x71cae6d9760bd9da!2sViksveien%2029%2C%203530%20R%C3%B8yse!5e0!3m2!1spl!2sno!4v1592553593887!5m2!1spl!2sno"
        },
        {
            id: uuidv4(),
            projectUrlName: "Vikstunet-Omsorgsbolig",
            projectName: "Vikstunet Omsorgsbolig",
            projectPicture: require('../images/Vikstunet-Omsorgsbolig-Dollhouse-View.jpg'),
            projectDescription: "Viksveien 29, 3530 Røyse",
            projectMatterportLink: "https://mpembed.com/show/?m=rZGSUxaQ56m&brand=1&play=1&qs=1&ts=5&title=1&minimap=1&scaleui=1&mt=2&details=1&mdir=2&mdirsearch=2&stats=3&image=https://no.ramboll.com/-/media/images/rambolllogos/ramboll_logo_websites.png",
            customer: "Hole kommune",
            customerLogo: require('../images/kommunevapen.png'),
            customerPage: "https://www.hole.kommune.no/",

            projectPosition: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.0679507500734!2d10.278971516102736!3d60.080244881927854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464105d1b335d90d%3A0x71cae6d9760bd9da!2sViksveien%2029%2C%203530%20R%C3%B8yse!5e0!3m2!1spl!2sno!4v1592553593887!5m2!1spl!2sno"
        },
    ],
};

export default projects;

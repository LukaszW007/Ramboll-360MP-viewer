const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions; // Fetch all the posts
    const projects = await graphql(`
    {
       allAirtable {
        edges {
          node {
            data {
              projectUrlName
            }
          }
        }
    }
    }
  `).catch(error => {
        console.error(error);
    });
    // Load the post template
    const templateProjectPage = path.resolve('src/pages/projectPage.js');
    projects.data.allAirtable.edges.forEach(edge => {
        // TODO cos z ta data.allPrismic jest nie tak
        // Create a page for every post
        createPage({
            path: `/${edge.node.data.projectUrlName}/projectPage`,
            component: templateProjectPage,
            context: { projectUrlName: edge.node.data.projectUrlName },
        });
    });

    const template360viewerPage = path.resolve('src/pages/360-viewer.js');
    projects.data.allAirtable.edges.forEach(edge => {
        // TODO cos z ta data.allPrismic jest nie tak
        // Create a page for every post
        createPage({
            path: `/${edge.node.data.projectUrlName}/360-viewer`,
            component: template360viewerPage,
            context: { projectUrlName: edge.node.data.projectUrlName },
        });
    });

    const templateDescriptionPage = path.resolve('src/pages/description.js');
    projects.data.allAirtable.edges.forEach(edge => {
        // TODO cos z ta data.allPrismic jest nie tak
        // Create a page for every post
        createPage({
            path: `/${edge.node.data.projectUrlName}/description`,
            component: templateDescriptionPage,
            context: { projectUrlName: edge.node.data.projectUrlName },
        });
    });

    const templateMapPage = path.resolve('src/pages/map.js');
    projects.data.allAirtable.edges.forEach(edge => {
        // TODO cos z ta data.allPrismic jest nie tak
        // Create a page for every post
        createPage({
            path: `/${edge.node.data.projectUrlName}/map`,
            component: templateMapPage,
            context: { projectUrlName: edge.node.data.projectUrlName },
        });
    });
};

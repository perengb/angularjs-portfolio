var app = angular.module('portfolioApp', ['portfolio-projects']);

app.controller('PortfolioController', ['$http', function ($http) {
    
    this.name = 'Per Engberg';

    this.projects = [
        {
            name: 'IPTV box GUI',
            course: 'MDI Fortsättningskurs',
            tags: ['Prototyping', 'Wireframe', 'User Interaction', 'Interaction Design', 'Research', 'User Testing'],
            images: ['Digitalbox/1.png', 'Digitalbox/2.png', 'Digitalbox/3.png'],
            desc: 'Took part in a school UX project that was about designing the GUI of an IPTV-box, in the porject we helped Ericsson develop the notifications for the box. User testing was conducted'
        },
        {
            name: 'Travel Agency',
            course: 'MDI med prototyping',
            tags: ['Prototyping', 'Wireframe', 'User Interaction', 'Work Flow'],
            images: ['Resesida/2.jpg', 'Resesida/4.jpg', 'Resesida/5.jpg'],
            desc: 'A project where we, with the help of the users, created and designed the workflow for booking a trip on a travel agency website.'
        },
        {
            name: 'Facebook-App',
            course: 'Kooperativ IT-design',
            tags: ['Wireframe', 'Prototyping', 'User Interaction', 'Interaction Design', 'Research', 'User Testing'],
            images: ['Facebook-App/renders/startsida.png', 'Facebook-App/renders/status.png', 'Facebook-App/renders/schema.png'],
            link: 'Facebook-App/hifi.swf',
            desc: 'A KTH project in corporation with the youths house in Fittja, Stockholm where my team designed the GUI for an app to help benefit their community.'
        }
    ]
}]);
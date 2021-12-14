$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });

var learningArray='{ "learnPlatforms":['+
            '{"name":"w3Schools","src":"assets/w3school.jpg","href":"https://www.edgenuity.com/"},'+
            '{"name":"Udemy","src":"assets/udemy.png","href":"https://www.udemy.com/"},'+
            '{"name":"Teachable","src":"assets/teachable.jpg","href":"https://teachable.com/"},'+
            '{"name":"Skillshare","src":"assets/skillshare.png","href":"https://www.skillshare.com/"},'+
            '{"name":"JavaTPoint","src":"assets/javatpoint.png","href":"https://www.javatpoint.com/"},'+
            '{"name":"Coursera","src":"assets/coursera.png","href":"https://www.coursera.org/"},'+
            '{"name":"GeeksforGeeks","src":"assets/geeksforgeeks.png","href":"https://www.geeksforgeeks.org/"},'+
            '{"name":"Tutorialspoint","src":"assets/tutorials-point.png","href":"https://www.tutorialspoint.com/index.htm"}]}';
    var learnJson=JSON.parse(learningArray);

    $('#lsearch input').on('keypress',function(e) {
    if(e.which == 13) {
        $('#learnlist').empty();
        learnJson.learnPlatforms.forEach(element => {
            if(element.name.toLowerCase().indexOf($('#lplatform').val().toLowerCase()) > -1)
            {                
                let text='<li><img src="'+element.src+'"><br><a href="'+element.href+'" target="blank">'+element.name+'</a></li>';
                $('#learnlist').append(text);
            }
        });        
    }
    });

    var studyArray='{ "studyplatforms":['+
            '{"name":"Edge Nuity","src":"assets/Edgenuity_Logo.png","href":"https://www.edgenuity.com/"},'+
            '{"name":"MobyMax","src":"assets/mobymax.png","href":"https://www.mobymax.com/"},'+
            '{"name":"Apex Learning","src":"assets/apex_learning.jpg","href":"https://www.apexlearning.com/"},'+
            '{"name":"Speech Stream","src":"assets/texthelp.jpg","href":"https://www.texthelp.com/products/speechstream/"},'+
            '{"name":"Achieve3000","src":"assets/achieve-3000-believe.png","href":"https://www.achieve3000.com/"},'+
            '{"name":"Microsoft Teams","src":"assets/teams.png","href":"https://www.microsoft.com/en-ca/microsoft-teams/log-in"},'+
            '{"name":"Google Meet","src":"assets/google_meet.png","href":"https://meet.google.com/?pli=1"},'+
            '{"name":"Zoom","src":"assets/zoom.png","href":"https://zoom.us/"}]}';
    var studyJson=JSON.parse(studyArray);

    $('#ssearch input').on('keypress',function(e) {
    if(e.which == 13) {
        $('#studylist').empty();
        studyJson.studyplatforms.forEach(element => {
            if(element.name.toLowerCase().indexOf($('#splatform').val().toLowerCase()) > -1)
            {                
                let text='<li><img src="'+element.src+'"><br><a href="'+element.href+'" target="blank">'+element.name+'</a></li>';
                $('#studylist').append(text);
            }
        });        
    }
    });

    var collegeArray='{ "collegeplatforms":['+
    '{"name":"ECollege InSight","src":"assets/college_insight.png","href":"https://college-insight.org/"},'+
    '{"name":"College Dunia","src":"assets/collegedunia.png","href":"https://collegedunia.com/"},'+
    '{"name":"College Navigator","src":"assets/college-navigator.jpg","href":"https://nces.ed.gov/collegenavigator/"},'+
    '{"name":"College Board","src":"assets/college-board-vector-logo.png","href":"https://www.collegeboard.org/"},'+
    '{"name":"Cappex","src":"assets/cappex.png","href":"https://www.cappex.com/"},'+
    '{"name":"Niche","src":"assets/niche.jpg","href":"https://www.niche.com/colleges/search/best-colleges/"},'+
    '{"name":"Unigo","src":"assets/unigo.png","href":"https://www.unigo.com/"},'+
    '{"name":"Study Portals","src":"assets/study_portals.png","href":"https://studyportals.com/"}]}';
    var collegeJson=JSON.parse(collegeArray);

        $('#csearch input').on('keypress',function(e) {
        if(e.which == 13) {
        $('#collegelist').empty();
        collegeJson.collegeplatforms.forEach(element => {
            if(element.name.toLowerCase().indexOf($('#cplatform').val().toLowerCase()) > -1)
            {                
                let text='<li><img src="'+element.src+'"><br><a href="'+element.href+'" target="blank">'+element.name+'</a></li>';
                $('#collegelist').append(text);
            }
        });        
    }
    });
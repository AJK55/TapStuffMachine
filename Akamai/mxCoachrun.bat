newman run Akamai.postman_collection.json -e Akamai.postman_environment.json -d ./CoachURLs/mxCoachUrlList.csv -r cli,html --reporter-html-export "./newman/mxreport.html"
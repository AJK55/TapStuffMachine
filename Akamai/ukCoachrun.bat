newman run Akamai.postman_collection.json -e Akamai.postman_environment.json -d ./CoachURLs/ukCoachUrlList.csv -r cli,html --reporter-html-export "./newman/ukreport.html"
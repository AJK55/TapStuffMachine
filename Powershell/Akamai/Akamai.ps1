Clear-Host

#$sources = Get-Content $PSScriptRoot/urlList.csv
#$sources = 'https://saudiarabia.coach.com'

foreach($source in $sources){
$headers = (Invoke-WebRequest -Uri 'https://saudiarabia.coach.com')
$source
$headers#.Headers#.'X-Akamai-Staging'
}

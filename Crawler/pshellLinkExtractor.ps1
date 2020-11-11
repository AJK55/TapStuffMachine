Clear-Host
$WebResponse = Invoke-WebRequest "http://www.coach.com"
#$WebResponse
$WebResponse.Links | Select-Object href | Where-Object {$_.href -like “http*”}
#$WebResponse.Links | Select href | Where-Object {$_.href -like “http*”} | Export-Csv -Path C:\Users\aklinga\Desktop\Crawler\pshellCrawl.csv -NoTypeInformation -Append
#$WebResponse.Links | Select href | Where-Object {$_.href -like “http*”} | Out-File C:\Users\aklinga\Desktop\Crawler\pshellCrawl.txt -Append
$WebResponse.Links | Select-Object href | Where-Object {$_.href -like “http*”} | Out-File $PSScriptRoot\pshellCrawl.txt -Append
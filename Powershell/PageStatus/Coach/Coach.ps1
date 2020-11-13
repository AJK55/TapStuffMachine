Clear-Host

$urls = Get-Content  $PSScriptRoot\testUrls.txt
#$urls = Get-Content  $PSScriptRoot\pshellCrawl.txt
$path = "$PSScriptRoot\CSV\coach $(get-date -uformat %d%m%Y%H%M%S).csv" 

#$WebResponse = Invoke-WebRequest "http://www.coach.com"
#$WebResponse.Links | Select href | Where-Object {$_.href -like “http*”}
#$WebResponse.Links | Select href | Where-Object {$_.href -like “http*”} | Export-Csv -Path C:\Users\aklinga\Desktop\Crawler\pshellCrawl.csv -NoTypeInformation -Append
#$WebResponse.Links | Select href | Where-Object {$_.href -like “http*”} | Out-File $PSScriptRoot\pshellCrawl.txt -Append

foreach($url in $urls){
$request = Invoke-WebRequest -Uri $url
#Write-Output $url , $request.StatusCode
$c = "$($url) , $($request.StatusCode)" |
ConvertFrom-String -Delimiter "," -PropertyNames Test_URL, StatusCode
$c | Export-Csv -Path $path -NoTypeInformation -Append
}
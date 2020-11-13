Clear-Host

$key = Get-Content  $PSScriptRoot\key.txt
$sources = Get-Content  $PSScriptRoot\testURLs.txt
$path = "$PSScriptRoot\CSV\gtMetrix $(get-date -uformat %d%m%Y%H%M%S).csv" 

foreach($source in $sources) {
$uri = 'https://gtmetrix.com/api/0.1/test'
$headers = @{'Authorization' = $key}
$body = @{
'url' = $source
}
$i = 0
$stat = ""


$testid = (Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body)
$testid =  $testid.test_id

DO{
$b = (Invoke-RestMethod -Uri $uri/$testid -Method Get -Headers $headers)
$stat = $b.state
Start-Sleep -Seconds 1.5
$i++
Write-Output $stat
}
While
($stat -ne "completed" -and $i -lt 20)

Write-Output "Completed running test for " $body.url
Start-Sleep -Seconds 3.5

$c = "$($body.url),$($testid), $($b.results.pagespeed_score), $($b.results.page_bytes), $($b.results.dom_content_loaded_time), $($b.results.first_paint_time), $($b.results.report_url)" | 
ConvertFrom-String -Delimiter "," -PropertyNames test_url, test_id,  pagespeed_score, page_bytes, dom_content_loaded_time, first_paint_time, report_url
Write-Output $c

$c | Export-Csv -Path $path -NoTypeInformation -Append
}
Invoke-Item $path
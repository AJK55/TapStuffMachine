Clear-Host

$path = "$PSScriptRoot\CSV\testID$(get-date -uformat %d%m%Y%H%M%S).csv"
$i = 0
$stat = ""
$sources = 
(
@{"url"="https://images.coach.com/is/image/Coach/2214_eau_a45?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75";},
@{"url"="https://img1.cohimg.net/is/image/Coach/2214_eau_a45?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75";},
@{"url"="https://img1.cohimg.net/is/image/Coach/1072_v5chk_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75"},
@{"url"="https://images.coach.com/is/image/Coach/1072_v5chk_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75"},
@{"url"="https://images.coach.com/is/image/Coach/1072_v5chk_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75"}
)

foreach($source in $sources) {
$testid = 
Invoke-RestMethod -Uri "https://webspeedtest-api.cloudinary.com/test/run" -Method Post -Body ($source | ConvertTo-Json) -ContentType "application/json"
$testid = $testid.data.testId
$testid

DO{
$results = (Invoke-RestMethod -Uri "https://webspeedtest-api.cloudinary.com/test/$testid" -Method Get)
$stat = $results.message
Start-Sleep -Seconds 3.0
$i++
Write-Output $stat
}
While
($stat -eq "test not finished" -and $i -lt 20) 
$results
$results.data.resultSumm.totalPercentChange
$c = "$($results.data.resultSumm.url), $("https://webspeedtest-api.cloudinary.com/test/$testid"),$($results.status), $($results.data.resultSumm.totalPercentChange)" | 
ConvertFrom-String -Delimiter "," -PropertyNames  url , testid, status , percentage
#echo $url
#Write-Output $c
$c | Export-Csv -Path $path -NoTypeInformation -Append
}
#Invoke-Item $path

Clear-Host
$pagespeedURL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
$testURLs = Get-Content "$PSScriptRoot\testURLs.txt"
$path = "$PSScriptRoot\CSV\googlePageSpeed $(get-date -uformat %d%m%Y%H%M%S).csv" 



foreach($testURL in $testURLs) {
$url = $pagespeedURL + "?url=" + $testURL
#echo $url
$a = Invoke-RestMethod -Uri $url -Method Get

## Run Individual
#$a = Invoke-RestMethod -Uri https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.katespade.com/ -Method Get
#Write-Output $a
#Write-Output $a.lighthouseResult
#Write-Output $a.lighthouseResult.audits
#Write-Output $a.lighthouseResult.audits.interactive

#echo $a.id
#echo $a.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category
#echo $a.analysisUTCTimestamp
$c = "$($a.id),$($url), $($a.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category), $($a.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category),$($a.loadingExperience.overall_category),$($a.originLoadingExperience.overall_category), $($a.analysisUTCTimestamp)" | 
ConvertFrom-String -Delimiter "," -PropertyNames  test_url, pagespeed_url, FIRST_CONTENTFUL_PAINT_MS.category_Score, FIRST_INPUT_DELAY_MS.category_Score , loadingExperience.overall_category, originLoadingExperience.overall_category, analysisUTCTimestamp 
#echo $url
Write-Output $c
$c | Export-Csv -Path $path -NoTypeInformation -Append
}
Invoke-Item $path
Clear-Host
#$pagespeedURL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
$user = 'Storefront'
$pass = 'COACH2020'

$pair = "$($user):$($pass)"

$encodedCreds = [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes($pair))

$basicAuthValue = "Basic $encodedCreds"

$Headers = @{
    Authorization = $basicAuthValue
}

Write-Output $Headers

$url = (Invoke-WebRequest -Uri 'https://development-global-coach.demandware.net/on/demandware.store/Sites-Coach_US-Site' -Headers $Headers)
Write-Output $url
Write-Output $url.StatusCode
Write-Output $url.RawContent
Write-Output $url.Links.innerHTML
Write-Output $url.Links.href
#$aurl = $pagespeedURL + "?url=" + $url
#$aurl = $pagespeedURL + "?url=" +'https://development-global-coach.demandware.net/on/demandware.store/Sites-Coach_US-Site' -Headers $Headers
#echo $aurl


#Invoke-RestMethod -Uri $aurl -Method Get

#Invoke-RestMethod -Uri https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://development-global-coach.demandware.net/on/demandware.store/Sites-Coach_US-Site -Headers $Headers -Method Get
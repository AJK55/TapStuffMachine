Clear-Host

$path = "$PSScriptRoot\CSV\Results$(get-date -uformat %d%m%Y%H%M%S).csv"
$file =
Get-ChildItem -Path $PSScriptRoot\CSV\testID*.csv | Sort-Object LastWriteTime -Descending | Select-Object -First 1
$file = $file.Name
$file

$ids =
(Import-Csv -Delimiter "," -Path $PSScriptRoot\CSV\$file).testid

foreach($id in $ids){
    $results = Invoke-RestMethod -Uri $id
    $c = 
    "$($id),$($results.status), $($results.data.resultSumm.url),$($results.data.resultSumm.totalPercentChange)" |
    ConvertFrom-String -Delimiter "," -PropertyNames  id, status, url, totalPercentChange
    $c | Export-Csv -Path $path -NoTypeInformation -Append
}
##https://www.winhelponline.com/blog/how-to-extract-links-from-a-webpage-in-windows/

##Using your Web browser’s Developer Tools
##JS
# Array.prototype.slice.call(document.querySelectorAll('a'), 0).forEach((a,i)=>console.log(`#${i+1} - ${a.innerText} -- ${a.href}`));
##If you only want to grab the URLs without the serial number or the title text, use this command:
# urls = $$('a'); for (url in urls) console.log ( urls[url].href );

##Powershell
##This gets the list of links in the specified webpage and outputs the list to grid view control.
##Another advantage of this PowerShell command is that it sorts the entries and also removes duplicate URLs from the collection.
(Invoke-WebRequest -Uri "https://de.coach.com/sitemap").Links.Href | Sort-Object | Get-Unique | out-gridview

##Grab title and URL
##To view the innerText in addition to the corresponding links or URLs, run:
# (Invoke-WebRequest -Uri "https://www.winhelponline.com").Links | sort-object href -Unique | Format-List innerText, href

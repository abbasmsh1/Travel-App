$urls = @{
    "hunza.jpg" = "https://images.unsplash.com/photo-1586804187023-a69fb52df436"
    "badshahi.jpg" = "https://images.unsplash.com/photo-1589650938441-6b42e0a30c67"
    "deosai.jpg" = "https://images.unsplash.com/photo-1589650938443-2d6f88e96b76"
}

if (!(Test-Path "public")) {
    New-Item -ItemType Directory -Path "public"
}

foreach ($image in $urls.GetEnumerator()) {
    $outputPath = Join-Path "public" $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
    Write-Host "Downloaded $($image.Key)"
} 
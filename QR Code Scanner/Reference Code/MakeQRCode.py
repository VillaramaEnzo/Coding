import qrcode as qr

img = qr.make("https://www.youtube.com/watch?v=-GmJLI122ZM")
img.save("video.png")

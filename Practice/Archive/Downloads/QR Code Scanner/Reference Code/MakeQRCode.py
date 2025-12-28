import qrcode as qr

link = "https://linktr.ee/ASPAUOA"

img = qr.make(link)
img.save("Aspa.png")

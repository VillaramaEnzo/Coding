import cv2
# import numpy as np
from pyzbar.pyzbar import decode

# Test

# Path to file
path = "/Users/enzov/Desktop/Coding/QR Code Scanner/Images/"
data = path + "video.png"

img = cv2.imread(data)

for barcode in decode(img):

    print(barcode)

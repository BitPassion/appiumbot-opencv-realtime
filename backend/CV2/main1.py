import numpy as np
import cv2
from mss import mss
from PIL import Image
import time
import pyautogui
import pytesseract
import re


def ocr(img):
    # Convert the image to grayscale for better readability
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply thresholding to remove any noise
    thresh = cv2.threshold(
        gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]

    # Perform OCR using pytesseract
    text = pytesseract.image_to_string(thresh, lang='eng', config='--psm 11')

    # Clean up the extracted text
    text = re.sub(r'\n', ' ', text)
    text = re.sub(r'[^\w\s]', '', text)

    return text.strip()


mon = {'top': 30, 'left': 1171, 'width': 40, 'height': 50}

# Initialize the OCR engine
tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'
pytesseract.pytesseract.tesseract_cmd = tesseract_cmd

sct = mss()

while 1:
    sct.get_pixels(mon)
    img = Image.frombytes('RGB', (sct.width, sct.height), sct.image)
    cv2.imshow('test', np.array(img))
    text = ocr(np.array(img))
    print(text)
    if text:
        left_num = 0
        right_num = 0
        try:
            left_num = int(int(text)/10)
        except:
            pass
        try:
            right_num = int(text) % 10
        except:
            pass
        marches_count = right_num-left_num
        print(marches_count)
        if marches_count > 0:
            print('result', marches_count)
            with open("output.txt", "w") as info:
                info.write(str(marches_count))
            file = open('../resource_type.txt', 'r')
            line = file.readline()
            for i in range(0, marches_count):
                if (line == "Gold Mine"):

                    pyautogui.PAUSE = 2
                    pyautogui.click(103, 680)
                    pyautogui.PAUSE = 2
                    pyautogui.click(550, 789)
                    pyautogui.PAUSE = 2
                    pyautogui.click(537, 667)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1040, 604)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1254, 203)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1275, 760)

                elif (line == "Logging Camp"):

                    pyautogui.PAUSE = 2
                    pyautogui.click(103, 680)
                    pyautogui.PAUSE = 2
                    pyautogui.click(784, 789)
                    pyautogui.PAUSE = 2
                    pyautogui.click(774, 667)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1040, 604)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1254, 203)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1275, 760)

                elif (line == "Ore Mine"):

                    pyautogui.PAUSE = 2
                    pyautogui.click(103, 680)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1041, 789)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1029, 667)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1040, 604)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1254, 203)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1275, 760)

                elif (line == "Mana Pool"):

                    pyautogui.PAUSE = 2
                    pyautogui.click(103, 680)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1281, 789)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1270, 667)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1040, 604)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1254, 203)
                    pyautogui.PAUSE = 2
                    pyautogui.click(1275, 760)

            break
    if cv2.waitKey(25) & 0xFF == ord('q'):
        cv2.destroyAllWindows()
        break

    time.sleep(1)

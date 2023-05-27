import pyautogui
import sys
print('Press Ctrl-C to quit')

# pyautogui.click(912, 48)

try:
    while True:
        x, y = pyautogui.position()
        positionStr = 'X= ' + str(x).rjust(4) + ' Y: ' + str(y).rjust(4)
        print(positionStr, end='')
        print('\b' * len(positionStr), end='', flush=True)
except KeyboardInterrupt:
    print('\n')

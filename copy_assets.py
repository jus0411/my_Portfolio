import shutil
import os

src1 = r"C:\Users\정의석\.gemini\antigravity\brain\c0b674b6-ce39-44de-906d-fe571062a4a9\favicon_1774922865570.png"
dst1 = r"assets\favicon.png"

src2 = r"C:\Users\정의석\.gemini\antigravity\brain\c0b674b6-ce39-44de-906d-fe571062a4a9\project_mockup_1774922879014.png"
dst2 = r"assets\project-mockup.png"

try:
    shutil.copy(src1, dst1)
    print("Copied favicon")
except Exception as e:
    print(f"Favicon error: {e}")

try:
    shutil.copy(src2, dst2)
    print("Copied project mockup")
except Exception as e:
    print(f"Mockup error: {e}")

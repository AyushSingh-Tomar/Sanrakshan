import easyocr
from PIL import Image

def count_lines_in_image(image_path):
    reader = easyocr.Reader(['en'], gpu=False)  # 'en' is for English
    
    results = reader.readtext(image_path)
   
    line_count = len(results)

    return line_count


# Example usage:
if __name__ == "__main__":
    image_path = "./Screenshot.png"  # Replace with your actual image path
    num_lines = count_lines_in_image(image_path)
    print(f"Number of lines detected: {num_lines}")
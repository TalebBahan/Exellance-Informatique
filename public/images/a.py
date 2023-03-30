import os
import json


def create_json_file(folder_location):
    file_list = []
    i=0
    for root, dirs, files in os.walk(folder_location):
        
        for file_name in files:
            file_extension = os.path.splitext(file_name)[1]
            if file_extension in ['.jpg', '.png', '.jpeg', '.gif','.webp']:
                file_id = i
                file_title = os.path.splitext(file_name)[0].replace("_", " ").title()
                file_url = f"/images/{os.path.relpath(root, folder_location)}/{file_name}"
                file_category = os.path.basename(root)
                file_dict = {"id": file_id, "title": file_title, "imageUrl": file_url, "category": file_category}
                file_list.append(file_dict)
                i+=1
    with open(f"{os.path.basename(folder_location)}.json", "w") as outfile:
        json.dump(file_list, outfile)
create_json_file(r'C:\Users\hp\Desktop\excellenceInfo\public\images')
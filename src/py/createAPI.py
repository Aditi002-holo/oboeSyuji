
import JPNumberSystem
import json

# Define the range of numbers you want to convert (1 to 100)
start_num = 1
end_num = 5000

# Initialize an empty dictionary to store the conversions
conversions_dict1 = {}
conversions_dict2 = {}
conversions_dict3 = {}

# Loop through the numbers in the specified range
for num in range(start_num, end_num + 1):
    # Convert the number to its conversion in romaji using the provided function
    romaji_conversion = JPNumberSystem.Convert(num, "romaji")
    hiragana_conversion = JPNumberSystem.Convert(num, "hiragana")
    kanji_conversion = JPNumberSystem.Convert(num,"kanji")
    
    # Add the conversion to the dictionary
    conversions_dict1[str(num)] = romaji_conversion
    conversions_dict2[str(num)] = hiragana_conversion
    conversions_dict3[str(num)] = kanji_conversion


# Convert the dictionary to a JSON string
json_data = json.dumps(conversions_dict1, ensure_ascii=False, indent=4)
with open("toRomaji.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_data)

# Write the JSON data to a file
json_data = json.dumps(conversions_dict2, ensure_ascii=False, indent=4)
with open("toHiragana.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_data)

json_data = json.dumps(conversions_dict3, ensure_ascii=False, indent=4)
with open("toKanji.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_data)
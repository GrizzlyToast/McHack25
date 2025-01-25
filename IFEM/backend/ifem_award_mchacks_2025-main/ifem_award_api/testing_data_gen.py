import requests

base_url = "http://127.0.0.1:3000"  # Replace with your Flask app's URL
endpoint = "/api/v1/queue"  # Endpoint for GET

response = requests.get(base_url + endpoint)

if response.status_code == 200:
    print("Response data:", response.json())  # Assuming the endpoint returns JSON
else:
    print(f"Error: {response.status_code}, {response.text}")

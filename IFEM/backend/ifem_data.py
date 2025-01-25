import requests

base_url = "http://127.0.0.1:3000"  # Replace with your Flask app's URL

def get_queue():
    return requests.get(base_url + "/api/v1/queue").json()

def get_stats():
    return requests.get(base_url + "/api/v1/stats/current").json()



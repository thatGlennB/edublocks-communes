import requests
api_url = "https://www.odwb.be/api/explore/v2.1/catalog/datasets/code-postaux-belge/records?"
def get(skip, take):
  filter_query = api_url
  if skip < 1:
    filter_query += f"limit=1"
  elif skip > 20:
    filter_query += f"limit=20"
  else:
    filter_query += f"limit={skip}"
  if take > 1:
    filter_query += f"&offset={take}"
  r = requests.get(filter_query)
  results = r.json()["results"]
  return results

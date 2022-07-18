from requests import Session
import json

unikquekey='xxxxxx'
url="https://script.google.com/macros/s/"+unikquekey+"/exec"]:
try:
	with Session() as ss:
		params={'aksi':'0'}
		response = ss.post(url,data=params)
		print(response.json())
		
except:
	pass

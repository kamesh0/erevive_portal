import frappe
# import requests

def get_context(context):

    context.no_cache = True
    
    products = frappe.get_all("Product", fields=["*"],filters={'published' :True}, order_by='sorting desc' )
    context.products = products

    return context

# @frappe.whitelist()
# def send_whatapp_msg():
#     url = "https://api.gupshup.io/sm/api/v1/msg"

#     payload = "channel=whatsapp&source=919755758121&destination=918319366462&message='hi bro'&src.name='ETPLWa'&disablePreview=false&encode=true"
#     headers = {
#         "accept": "application/json",
#         "Content-Type": "application/x-www-form-urlencoded",
#         "apikey": "isiv6sqfdrxtdy08p7pshuyynxclwfc3"
#     }

#     response = requests.post(url, data=payload, headers=headers)

#     print(response.text)
#     return response.text
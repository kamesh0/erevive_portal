import frappe

def get_context(context):

    context.no_cache = True
    
    products = frappe.get_all("Product", fields=["*"])
    context.products = products

    return context


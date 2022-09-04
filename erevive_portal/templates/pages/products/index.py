import frappe

def get_context(context):
    products = frappe.get_all("Product", fields=["*"])
    context.products = products

    return context
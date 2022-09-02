import frappe

def get_context(context):

    context.show_sidebar = True

    partner = frappe.db.get_value(
        "Partner",
        { "email_id": frappe.session.user },
        ["email_id", "name"],
        as_dict=True
    )
    context.partner = partner

    if frappe.session.user != 'Administrator' and (not partner or frappe.session.user == "Guest") :
        raise frappe.PermissionError

    doc = frappe.get_doc("Partner", partner.name)

    context.doc = doc

    total_leads = frappe.db.count("Partner Lead", filters={"partner": partner.name})
    total_leads_won = frappe.db.count("Partner Lead", filters={"partner": partner.name, "status": "Won"})

    values= { "partner": doc.name }
    total_billing = frappe.db.sql("SELECT SUM(billing_amount) billing_amount FROM `tabPartner Lead` WHERE partner = %(partner)s", values=values, as_dict=1)
    total_earning  = frappe.db.sql("SELECT SUM(amount_received) amount_received FROM `tabPartner Lead` WHERE partner = %(partner)s", values=values, as_dict=1)

    products = frappe.db.get_all("Product", fields=["*"], limit=10)

    context.total_leads = total_leads
    context.total_leads_won = total_leads_won
    context.total_billing = total_billing
    context.total_earning = total_earning
    context.products = products

    return context
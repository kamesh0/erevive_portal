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

    leads = frappe.db.get_all("Partner Lead", fields=["*"], filters={"partner": partner.name})

    context.leads = leads
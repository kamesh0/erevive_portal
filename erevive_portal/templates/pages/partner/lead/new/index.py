import frappe, json

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

    states = frappe.get_all("State")
    countries = frappe.get_all("Country")
    products = frappe.get_all("Product", fields=["*"])

    context.states = states
    context.countries = countries
    context.products = products

@frappe.whitelist()
def create_new_lead(payload=None):
    payload = frappe._dict(json.loads(payload))

    partner = frappe.db.get_value(
            "Partner",
            { "email_id": frappe.session.user },
            ["email_id", "name"],
            as_dict=True
        )

    if frappe.session.user != 'Administrator' and (not partner or frappe.session.user == "Guest") :
        raise frappe.PermissionError

    doc = frappe.new_doc("Partner Lead")

    doc.company_name = payload.company_name
    doc.address_1 = payload.address_1
    doc.address_2 = payload.address_2
    doc.city = payload.city
    doc.state = payload.state
    doc.contact_person = payload.contact_person
    doc.email_id = payload.email_id
    doc.contact_no = payload.contact_no
    doc.partner = partner.name
    doc.remarks = payload.remarks
    doc.product = payload.product
    doc.status = "Open"

    doc.save(ignore_permissions=True)

    frappe.response["message"] = "okay"
    return "okay"
    

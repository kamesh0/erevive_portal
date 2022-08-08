import frappe, json

def get_context(context):

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

@frappe.whitelist()
def update_partner_profile(payload=None):
    payload = frappe._dict(json.loads(payload))

    partner = frappe.db.get_value(
            "Partner",
            { "email_id": frappe.session.user },
            ["email_id", "name"],
            as_dict=True
        )

    if frappe.session.user != 'Administrator' and (not partner or frappe.session.user == "Guest") :
        raise frappe.PermissionError

    doc = frappe.get_doc("Partner", partner.name)

    doc.address_1 = payload.address_1
    doc.address_2 = payload.address_2
    doc.city = payload.city
    doc.state = payload.state
    doc.pincode = payload.pincode
    doc.country = payload.country
    doc.primary_contact_person = payload.primary_contact_person
    doc.primary_contact_no = payload.primary_contact_no
    doc.alternate_contact_person = payload.alternate_contact_person
    doc.alternate_contact_no = payload.alternate_contact_no
    doc.alternate_email_id = payload.alternate_email_id

    doc.save(ignore_permissions=True)

    frappe.response["message"] = "okay"
    return "okay"
    

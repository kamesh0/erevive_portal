import frappe, json
from frappe.utils.file_manager import save_file

def get_context(context):

    context.show_sidebar = True
    context.no_cache = True

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
    countries = frappe.get_all("Country")
    states = frappe.get_all("State")
    meta = frappe.get_meta("Partner")


    context.doc = doc
    context.countries = countries
    context.states = states
    context.meta = meta

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
    doc.gst_no = payload.gst_no
    doc.bank_name = payload.bank_name
    doc.branch_name = payload.branch_name
    doc.bank_account_no = payload.bank_account_no
    doc.ifsc = payload.ifsc
    doc.swift_code = payload.swift_code
    doc.account_type = payload.account_type

    doc.save(ignore_permissions=True)

    frappe.response["message"] = "okay"
    return "okay"
    
@frappe.whitelist()
def upload_files(document_pan, document_gst):

    partner = frappe.db.get_value(
            "Partner",
            { "email_id": frappe.session.user },
            ["email_id", "name"],
            as_dict=True
        )

    if frappe.session.user != 'Administrator' and (not partner or frappe.session.user == "Guest") :
        raise frappe.PermissionError

    if document_pan:
        fd_json = json.loads(document_pan)
        fd_list = list(fd_json["files_data"])

        for fd in fd_list:
            file_name = f"{partner.name}-PAN"
            print(file_name)
            filedoc = save_file(file_name, fd["dataurl"], "Partner", partner.name, decode=True, is_private=1)

    if document_gst:
        fd_json = json.loads(document_gst)
        fd_list = list(fd_json["files_data"])

        for fd in fd_list:
            file_name = f"{partner.name}-GST"
            filedoc = save_file(file_name, fd["dataurl"], "Partner", partner.name, decode=True, is_private=1)
    


import frappe
from frappe.utils import validate_email_address 

def get_conetxt(context):
    pass


@frappe.whitelist(allow_guest=True)
def new_partner_request(company="", email="", contact_person="", mobile=""):
    if not company:
        frappe.response["message"] = "Please Enter Company Name"
        return

    if not email:
        frappe.response["message"] = "Please provide email id"
        return

    if not contact_person:
        frappe.response["message"] = "Please provide contact person"
        return

    if not mobile:
        frappe.response["message"] = "Please provide mobile"
        return
        
    # validate_email_address(email, True)

    if frappe.db.count("Partner", { "email_id" : email }) > 0:
        frappe.response["message"] = "Could not register, please contact support"
        return

    partner = frappe.get_doc({
        'doctype': 'Partner',
        'organization_name': company,
        'primary_contact_person': contact_person,
        'primary_contact_no': mobile,
        'email_id': email
    })

    partner.insert(ignore_permissions=True, ignore_mandatory=True)

    try:
        subject = "Welcome! Partner Onboarding"
        content = f"<p>Dear {contact_person}</p><p>eRevive Technologies, Welcomes You. <p> Our Team will get in touch with you shortly</p>"
        frappe.sendmail(recipients=email, message=content, subject=subject)
    except Exception as e:
        frappe.log_error(e)

    return "okay"
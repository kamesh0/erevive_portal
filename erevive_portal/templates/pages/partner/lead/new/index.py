import frappe, json

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
    print(payload)

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
    doc.pincode = payload.pincode
    doc.status = "Open"

    doc.save(ignore_permissions=True)

    frappe.response["message"] = "okay"
    return "okay"
    
@frappe.whitelist()
def fetch_category_product(category=None):
    category_data = frappe.get_all("Product", filters={'category':category}, fields=["*"])
    # category_name = frappe.get_doc("Product", category)

    html= """\
    <div class="form-group">
    <label class="form-label">Select {category}</label>
    <select class="form-control" id="sub_product">
    <option value=""> Select Product</option>
    
    """.format(category=category)

    for product in category_data:
        html = html + f"<option value={product.product_name}>"+ product.product_name+ "</option>"

    html = html + " </select></div>"

    if category_data:
        return html

    else :
        return ''
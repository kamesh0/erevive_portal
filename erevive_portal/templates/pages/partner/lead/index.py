import frappe

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

    leads = frappe.db.get_all("Partner Lead", fields=["*"], filters={"partner": partner.name})

    context.leads = leads

    return context

@frappe.whitelist()
def fetch_lead_details(lead_name):

    lead = frappe.get_doc("Partner Lead", lead_name)
    product =frappe.get_doc("Product", lead.product, fields=["*"])

    html = """\
    
    <div class="col-sm-6">
    <p><strong>Company Name </strong> : {lead.company_name}</p>
    <p><strong>Contact Person Name </strong> : {lead.contact_person}</p>
    <p><strong>Contact Number </strong> : {lead.contact_no}</p>
    <p><strong>Email </strong> : {lead.email_id}</p>
    <p><strong>Product </strong> : {product.product_name}</p>
    </div>

    <div class="col-sm-6">
    <p><strong>Billing Amount </strong> : {lead.amount_received}</p>
    <p><strong>Amount Received </strong> : {lead.amount_received}</p>
    <p><strong>Partner Margin </strong> : {lead.partner_margin}</p>
   
    </div>
   
    """.format(lead=lead, product=product)


    return html

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
    
    <div class="col-sm-6 table-responsive">
    <table class="table table-striped table-bordered">
    <tr><td><p><strong>Company Name </strong></p> </td> <td><p>  {lead.company_name} </td></p> </tr>
    <tr><td><p><strong>Contact Person Name </strong> </p> </td> <td><p>  {lead.contact_person} </td></p> </tr>
    <tr><td><p><strong>Contact Number </strong></p> </td> <td><p>  {lead.contact_no} </td></p> </tr>
    <tr><td><p><strong>Email </strong></p> </td> <td><p>  {lead.email_id} </td></p> </tr>
    <tr><td><p><strong>Product </strong></p> </td> <td><p>  {product.category} </td></p> </tr>
    <tr><td><p><strong>Address </strong></p> </td> <td><p>  {lead.address_1}, {lead.address_2}, {lead.city},
     {lead.state}, {lead.country} </td></p> </tr>
    </table>
    
    </div>

    <div class="col-sm-6 table-responsive">
     <table class="table table-striped table-bordered">
    <tr><td><p><strong>Billing Amount </strong></p> </td> <td><p>  {lead.billing_amount} </td></p> </tr>
    <tr><td><p><strong>Amount Received</strong> </p> </td> <td><p>  {lead.amount_received} </td></p> </tr>
    <tr><td><p><strong>Partner Margin </strong></p> </td> <td><p>  {lead.partner_margin} </td></p> </tr>
    </table>
    
    </div>
   
    """.format(lead=lead, product=product)


    return html

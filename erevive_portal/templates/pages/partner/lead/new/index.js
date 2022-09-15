frappe.ready(function() {
	

	$('.btn-send').off("click").on("click", function () {
        var company_name = $("#company_name").val();
		var address_1 = $("#address_1").val();
		var address_2 = $("#address_2").val();
		var city = $("#city").val();
		var state = $("#state").val();
		var country = $("#country").val();
		var contact_person = $("#contact_person").val();
		var contact_no = $("#contact_no").val();
		var email_id = $("#email_id").val();
		var pincode = $("#pincode").val();
		var remarks = $("#remarks").val();
		var sub_product = $("#sub_product").val();
		if (sub_product){
			var product = $("#sub_product").val();
		}else{
			var product = $("#product").val();
		}

		var req= {
            company_name: company_name,
			address_1: address_1,
			address_2: address_2,
			city: city,
			state: state,
			country: country,
			contact_person: contact_person,
			email_id: email_id,
			contact_no: contact_no,
			remarks: remarks,
			product: product,
			pincode: pincode
		}

		frappe.call({
			type: "POST",
			method: "erevive_portal.templates.pages.partner.lead.new.index.create_new_lead",
			args: {payload : req},
			callback: function(r) {
				console.log(r)
				if (r.message === "okay") {
					frappe.msgprint("New Lead Added")
					$("input").val()
					
					setTimeout(function() {
						window.location.href = "/partner/lead"
					}, 2000)
					
				} else {
					frappe.msgprint(r.message)
				}
			}
		})

	})


});
frappe.ready(function() {

	$('.btn-send').off("click").on("click", function () {
		var address_1 = $("#address_1").val();
		var address_2 = $("#address_2").val();
		var city = $("#city").val();
		var state = $("#state").val();
		var pincode = $("#pincode").val();
		var country = $("#country").val();
		var primary_contact_person = $("#primary_contact_person").val();
		var primary_contact_no = $("#primary_contact_no").val();
		var email_id = $("#email_id").val();
		var alternate_contact_person = $("#alternate_contact_person").val();
		var alternate_contact_no = $("#alternate_contact_no").val();
		var alternate_email_id = $("#alternate_email_id").val();

		var req= {
			address_1: address_1,
			address_2: address_2,
			city: city,
			state: state,
			pincode: pincode,
			country: country,
			primary_contact_person: primary_contact_person,
			primary_contact_no: primary_contact_no,
			email_id: email_id,
			alternate_contact_no: alternate_contact_no,
			alternate_contact_person: alternate_contact_person,
			alternate_email_id: alternate_email_id
		}

		frappe.call({
			type: "POST",
			method: "erevive_portal.templates.pages.partner.profile.index.update_partner_profile",
			args: {payload : req},
			callback: function(r) {
				if (r.message === "okay") {
					frappe.msgprint("Profile Updated")
					$("input").val()
					
					setTimeout(function() {
						window.location.href = "/partner/dashboard"
					}, 2000)
					
				} else {
					frappe.msgprint(r.message)
				}
			}
		})

	})


});
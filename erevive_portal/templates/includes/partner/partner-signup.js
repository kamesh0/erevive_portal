frappe.ready(function() {

	$('.btn-send').off("click").on("click", function() {
        var company = $('#company').val();
        var contact_person = $('#contact_person').val();
        var mobile = $('#mobile').val();
        var email = $('#email').val();

		if(!(company)) {
			frappe.msgprint('{{ _("Please Enter Company Name") }}');
			return false;
		}
		if(!(contact_person)) {
			frappe.msgprint('{{ _("Please Enter Contact Person Name") }}');
			return false;
		}
		if(!(mobile)) {
			frappe.msgprint('{{ _("Please Enter Mobile Number") }}');
			return false;
		}
		if(!(email && validate_email(email))) {
			frappe.msgprint('{{ _("Please Enter Email ID") }}');
			return false;
		}

		var req = {
			company: company,
			mobile: mobile,
			contact_person: contact_person,
			mobile: mobile,
			email: email
		}

		frappe.call({
			type: "POST",
			method: "erevive_portal.templates.pages.partner.signup.index.new_partner_request",
			args: req,
			callback: function(r) {
				if (r.message==="okay") {
					frappe.msgprint('{{ _("Thank you for request for partnership, our team will get in touch with you shortly") }}');
					$("input").val("");
				} else {
					frappe.msgprint(r.message);
				}
			}
		})

        // $("#contact-alert").toggle(false);
		// frappe.signup.new_partner_request({
		// 	company: company,
        //     contact_person: contact_person,
        //     mobile: mobile,
        //     email: email,
		// 	callback: function(r) {
		// 		if(r.message==="okay") {
		// 			frappe.msgprint('{{ _("Thank you for request for partnership, our team will get in touch with you shortly") }}');
		// 		} else {
		// 			frappe.msgprint('{{ _("There were errors") }}');
		// 			console.log(r.exc);
		// 		}
		// 		$(':input').val('');
		// 	}
		// }, this);
		// return false;
	});

});
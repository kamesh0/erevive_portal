frappe.ready(function () {

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
		var gst_no = $("#gst_no").val();
		var bank_name = $("#bank_name").val();
		var branch_name = $("#branch_name").val();
		var bank_account_no = $("#bank_account_no").val();
		var ifsc = $("#ifsc").val();
		var swift_code = $("#swift_code").val();
		var account_type = $("#account_type").val();

		var req = {
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
			alternate_email_id: alternate_email_id,
			gst_no: gst_no,
			bank_name: bank_name,
			branch_name: branch_name,
			bank_account_no: bank_account_no,
			ifsc: ifsc,
			swift_code: swift_code,
			account_type: account_type
		}


		var document_gst = $('#document_gst').prop('filedata');
		var document_pan = $('#document_pan').prop('filedata');


		frappe.call({
			method: "erevive_portal.templates.pages.partner.profile.index.upload_files",
			args: { "document_pan": document_pan, "document_gst": document_gst },
			freeze: true,
			freeze_message: __("Upload files..."),
			callback: function (r) {
				// if (!r.exc) {
				// 	frappe.msgprint(__("Files uploaded"));
				// } else {
				// 	frappe.msgprint(__("Files not uploaded. <br /> " + r.exc));
				// }
			}
		});

		frappe.call({
			type: "POST",
			method: "erevive_portal.templates.pages.partner.profile.index.update_partner_profile",
			args: { payload: req },
			callback: function (r) {
				if (r.message === "okay") {
					frappe.msgprint("Profile Updated")
					$("input").val()

					// setTimeout(function () {
					// 	window.location.href = "/partner/dashboard"
					// }, 2000)

				} else {
					frappe.msgprint(r.message)
				}
			}
		})

	})


});
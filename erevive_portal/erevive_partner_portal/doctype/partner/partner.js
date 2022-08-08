// Copyright (c) 2022, eRevive and contributors
// For license information, please see license.txt

frappe.ui.form.on('Partner', {
	refresh: function(frm) {
		if (frm.doc.disabled) {
			frm.add_custom_button("Create User", function() {
				frappe.call({
					method: "frappe.core.doctype.user.user.sign_up",
					args: {
						email:frm.doc.email_id,
						full_name: frm.doc.primary_contact_person,
						send_welcome_email: 1,
						redirect_to: ""
					},
					callback: function(r) {
						if (!r.exc) {
							console.log(r)
						}
					}
				})
			})
		}
	}
});

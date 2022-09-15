# Copyright (c) 2022, eRevive and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Partner(Document):
	def after_insert(self):
		try:
			frappe.sendmail(
				recipients=self.email_id,
				template="partner_signup",
				args={"first_name":self.primary_contact_person},
				subject="New Partner Signup",
				header=["Partner Request", "green"],
			)
		except Exception as e:
			frappe.throw(e)

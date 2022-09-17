frappe.ready(function(){
    $("#searchinput").keyup(function() {
        let input = document.getElementById('searchinput').value
        input = input.toLowerCase();
        let x = document.getElementsByClassName('results');

        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "";
            }
        }
       
    });

    // $("#sendmsg").off("click").on("click", function() {
    //     console.log('request created')
    //     frappe.call({
    //         method: "erevive_portal.templates.pages.products.index.send_whatapp_msg",
    //         args: {  },
    //         freeze: true,
    //         callback: function (r) {
    //             console.log(r.message)
                
    //         }
    //     });
        
       
    // });

    $("#selectiput").change(function(){
        let input = document.getElementById('selectiput').value
        input = input.toLowerCase();
        let x = document.getElementsByClassName('results');

        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "";
            }
        }        
    });
})
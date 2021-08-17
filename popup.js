function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

  function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

function totalInc()
{
    var span_Text = document.getElementById("mult").innerText;
    
    var TotalPriceInc = (document.getElementById("quantityNo").value);
    var TotalPrice = (parseInt(TotalPriceInc) + 1); 
     document.getElementById("Result").innerHTML = (span_Text * (TotalPrice));
     console.log(TotalPriceInc);

    
    
}


function totalDec ()
{
    var span_Text = document.getElementById("mult").innerText;
    var TotalPriceInc = document.getElementById("quantityNo").value;
       
    document.getElementById("Result").innerHTML = (TotalPriceInc * span_Text) - span_Text ;

    if(document.getElementById("Result").innerHTML < 0){

document.getElementById("Result").innerHTML = 0;

    }
}

function totalInc2()
{
    var span_Text2 = document.getElementById("mult2").innerText;
    var TotalPriceInc2 = document.getElementById("quantityNo2").value;
    var TotalPrice = (parseInt(TotalPriceInc2) + 1); 
    totPrice = document.getElementById("Result2").innerHTML = (span_Text2 * TotalPrice) ;

    
    
}


function totalDec2 ()
{
    var span_Text2 = document.getElementById("mult2").innerText;
    var TotalPriceInc2 = document.getElementById("quantityNo2").value;
       
    document.getElementById("Result2").innerHTML = (TotalPriceInc2 * span_Text2) - span_Text2 ;

    if(document.getElementById("Result2").innerHTML < 0){

        document.getElementById("Result2").innerHTML = 0;
        
            }
}




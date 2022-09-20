

    var bodAsh = `  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.0/css/all.css">
    <!--<link rel="stylesheet" href="http://127.0.0.1/ashpage/bootstrap/css/bootstrap.css"> -->
      <link rel="stylesheet" href="https://asharamisynergy.com/sah_bi/bootstrap/css/bootstrap.css">
    
    
    
    
    <div class="container" id="cnt">
           
            <div class="modal fade" id="myBIModal" style="z-index:30000 !important" role="dialog">
              <div class="modal-dialog">
              
                <div class="modal-content">
                 <!-- <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Order Your Diesel Today</h4>
                  </div>-->
                  <div class="modal-body" id="modbod" style="z-index: 15000; padding-top: 0px !important;
									padding-bottom: 0px !important;">
                    <!-- <p>Some text in the modal.</p> -->
    
    
                    <div class="row">
            
                    
                     

    
                      <div class="col-md-7 col-sm-6 col-Xs-6" id="formPanel">
                        <p style="font-size:20px;color:#e1821f;padding-top:10px;margin-bottom:0px">Place Your Diesel Order</p>
						<hr style="color:#e1821f;margin-top:0px">
				<!--		<div id="successAlt" class="alert alert-success" style="font-size:15px;>
							<strong>Success!</strong>  <i id="successVol"></i> Litres  confirmed.
						</div> -->
                        <!-- name, email, phone, volume -->
                        <div style=" margin-top: 10px;" class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" id="fname" placeholder="Full Name" aria-describedby="basic-addon1">
                          </div>
                        



                          <div style=" margin-top: 10px;" class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="fas fa-mobile-alt"></i></span>
                            <input type="number" class="form-control" id="phnum" pattern=".{9,11}"  placeholder="Phone Number" aria-describedby="basic-addon1">
                          </div>



                        <div style=" margin-top: 10px;" class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                            <input type="email" class="form-control" id="email" placeholder="Email" aria-describedby="basic-addon1">
                          </div>
    
                       
    
                        <div style=" margin-top: 10px;" class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="fas fa-gas-pump "></i></span>
                            <input type="number" min="200" class="form-control" id="vol" placeholder="Volume (Min 200Ltrs)" aria-describedby="basic-addon1">
                          </div>
    
                       
    
                        <div style=" margin-top: 10px;" class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><i class="fa fa-globe "></i></span>
                            <select class="form-control" id="loc" placeholder="Location" aria-describedby="basic-addon1">
                              <option value="Lagos" selected>Lagos</option>
                              <option value="PH" >Port-Harcourt</option>
                              <option value="Abuja" >Abuja</option>
                              <option value="Ibadan" >Ibadan</option>
                            </select>
                          </div>
    
                       
    
                        <div style=" margin-top: 10px;margin-bottom: 10px;" class="input-group" id="lastAdd">
                            <span class="input-group-addon" id="basic-addon1"><i class="fas fa-map-marker-alt"></i></span>
                            <input type="text"  class="form-control" id="address" placeholder="Address" aria-describedby="basic-addon1">
                          </div>

                          <!--=======button start=====-->

    
                          &nbsp; <button type="button" class="btn btn-default pull-right" data-dismiss="modal">Close</button>
                          <button style="margin-right:10px;color:#ffffff" type="button" class="btn btn-danger pull-right ordBtn" onclick="saveOrder()" > Submit Order </button>
                          <i id="biLoad" style="margin-right:10px" class="fa fa-spinner fa-spin pull-right"></i>
                            <br>
                            

                            <!--=======button end=====-->
    
                      </div>

                      <div class="col-md-5 col-sm-6  col-Xs-6" id="pricePanel" style='color:#ffffff;background-image: url("https://app05.sahara-group.com/ads/dist/mail/fuel-image.jpg");
											background-size: 100% 100%;'>
                                   
                      <center style="margin-top:95%">
                      <p class="btn btn-danger" >
                       Price Now (<i id="princeIn">Lagos</i>)
                      </p>

          <p>
          <font class="lePrice" style="font-size:75px;">---</font>
          </p>
                      <!--  <strong style="font-size:75px;">&nbsp; &#x20a6;212</strong>-->
                          <p class="text-danger " id="alsoAVail" style="font-size:10px;color:#ffffff">*Also available in Abuja, Ibadan and Port Harcourt</p>
                          <p class="text-danger " style="font-size:10px;color:#ffffff">*Terms and Conditions apply</p>
                      </center>
                      </div>
                    <!--former second div-->


                    </div>
    
                    <!--==========button before========-->

                  </div>
				 <!-- <div class="modal-footer">
                  </div>-->
                </div>
                
              </div>
            </div>
            
          </div>
    
    
    
    <p title="Click here to order" style="position:fixed;
		width:60px;
		height:60px;
		top:40px;
		right:50px;
		color:#FFF;
		border-radius:50px;
		text-align:center; margin-top:42px;
		margin-left:10px;
		color:firebrick;
		font-size:12px;
		z-index: 15002;"  class=" float_bi"  > 
        <!-- <strong >&nbsp; &#x20a6;212</strong> e1821f-->
         <strong style="cursor: pointer;color:#ffffff;font-size:12px; margin-right:5px; font-family: Verdana, Geneva, sans-serif;" class="lePrice">---</strong>
         </p>
        <i title="Current Price" style="cursor: pointer; color:#ff0000;font-size:5em;z-index:15000;position:fixed;
        width:60px;
        height:60px;
        top:40px;
        right:50px;
        border-radius:50px;
        text-align:center;" class="fas fa-gas-pump  float_bi"></i>

        <!--<script src="http://127.0.0.1/ashpage/bootstrap/js/bootstrap.min.js"></script>-->
        <script src="https://asharamisynergy.com/sah_bi/bootstrap/js/bootstrap.min.js"></script>
        
        <script>
        

        
        
$( ".float_bi" ).click(function() {
    // alert( "Handler for .click() called." );
    // if(getWidth() < 990){

    //   $('#pricePanel').hide();
    //   $( "#formPanel" ).css('margin-bottom','10px');

    // }
    // else{
    //   $('#pricePanel').show();

    // }

    // $('#myBIModal').modal('show');
    window.open('https://order.asharamisynergy.com/', '_blank');
});



$( "#loc" ).change(function() {

  loc = $('#loc').val();

  cprice = null;

  if(loc == "Lagos"){
    cprice = priceObj.filter(p => p.location == 'Lagos')[0].price;
    price = cprice;
    $('#princeIn').html("Lagos");
    $('#alsoAVail').html("*Also available in Abuja, Ibadan and Port Harcourt");

    
  }
  else if(loc == "PH"){
    cprice = priceObj.filter(p => p.location == 'PH')[0].price;
    price = cprice;
    $('#princeIn').html("Port-Harcourt");
    $('#alsoAVail').html("*Also available in Abuja, Ibadan and Lagos");

  }
  else if(loc == "Ibadan"){
    cprice = priceObj.filter(p => p.location == 'Ibadan')[0].price;
    price = cprice;
    $('#princeIn').html("Ibadan");
    $('#alsoAVail').html("*Also available in Abuja, Port Harcourt and Lagos");

  }
  else if(loc == "Abuja"){
    cprice = priceObj.filter(p => p.location == 'Abuja')[0].price;
    price = cprice;
    $('#princeIn').html("Abuja");
    $('#alsoAVail').html("*Also available in Ibadan, Port Harcourt and Lagos");

  }
  $(".lePrice").html(' &#x20a6;'+cprice);


});





        </script>
        `;



        // $('body').addClass('ashbod');
price = null;
pagewidth = null;
priceObj = null;

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

$( document ).ready(function() {

 


  console.log();

  pagewidth = getWidth();
  width = getWidth();


  // if (sessionStorage.getItem("hasRunLiveBefore") === null) {
	// 	// $( "#vidModal" ).click();
  //       /** Your code here. **/
  //       sessionStorage.setItem("hasRunLiveBefore", true);
  //   }
  //   else{
  //     console.log("done before");
  //     return;
  //   }

	
  $( "body" ).prepend( bodAsh );
  // return;

        setTimeout(function() { 
			$("#successAlt").hide();

            var jqxhr = $.ajax({

                url: "https://app05.sahara-group.com/ads/d2dPrice",

                type: 'POST',
                data: {

                },

                cache:false,
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
                },

                beforeSend: function () {  
					// alert("bef");
					$("#biLoad").show();

                }            

                })

                .done(function () {
					$("#biLoad").hide();

                var response = jqxhr.responseText;

                response = JSON.parse(response);;

                // console.log(response);
                
                priceObj = response.Response
                console.log(priceObj);
         
                price = priceObj.filter(p => p.location == 'Lagos')[0].price;
                // priceph = response.Response[0][1].price;

                console.log(price);
                // console.log(priceph);
                if(isNaN(parseInt(price))){
                    alert("Price is Currently Unavailable");
                    console.log("Price is Currently Unavailable");
                    return;
                }

                $(".lePrice").html(` &#x20a6;`+price);

                })

                .fail(function () {
// alert("fail");
// alert("Fail is Currently Unavailable");
console.log("Price is Unavailable");
                })


                .always(function () {
                    // alert("always");

                });
// =======================================================================

                // if(getWidth() < 990){

                //   $('#pricePanel').hide();
                //   $( "#formPanel" ).css('margin-bottom','10px');

                // }
                // else{
                //   $('#pricePanel').show();

                // }
 
                // if (sessionStorage.getItem("hasRunLiveBefore") === null) {
              	// // $( "#vidModal" ).click();
                //     /** Your code here. **/
                //     sessionStorage.setItem("hasRunLiveBefore", true);
                //     $('#myBIModal').modal('show');
                // }
                // else{
                //   console.log("done before");
                //   return;
                // }
           
        
        }, 5000);


    
});


$('#code').on('shown.bs.modal', function (e) {
  // do something...
});


$(window).on('resize', function() {
  if ($(this).width() != width) {
    console.log(width);
    // if(getWidth() < 990){

    //   $('#pricePanel').hide();
    //   $( "#formPanel" ).css('margin-bottom','10px');

    // }
    // else{
    //   $('#pricePanel').show();

    // }
  }
});









function saveOrder() {
// alert("Temporarily unavailable to accept orders at the moment. Stay home, Stay safe");
//   return;

	fname = $('#fname').val();
	email = $('#email').val();
	phnum = $('#phnum').val();
	vol = $('#vol').val();
	address = $('#address').val();
	loc = $('#loc').val();

	
	if(fname==""){
		alert("Please Enter Full Name");
		 return false;
	}
	
	if(IsEmail(email)==false){
		alert("Please Enter Valid Email Address");
		return false;
	}
	
	if(phnum.length != 9 && phnum.length != 11 ){
		alert("Please Enter Valid Phone Number");
			return false;
	}


	if(vol < 200){
		alert("Please Enter Volume Above 200Litres");
			return false;
  }
  
  if(address==""){
		alert("Please Enter Full Delivery Address ");
		 return false;
	}
 
  if(loc==""){
		alert("Please Select Location");
		 return false;
	}
	
	// alert( fname );
	var jqxhr = $.ajax({

		url: "https://app05.sahara-group.com/ads/d2dOrder",

		type: 'POST',
		data: {
			fname:fname,
			email:email,
			phnum:phnum,
			vol:vol,
      address:address,
      price:price,
      location:loc
		},

		cache:false,
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		alert(errorThrown);
		},

		beforeSend: function () {  
			// alert("bef");
			$("#biLoad").show();


		}            

		})

		.done(function () {
			$("#biLoad").hide();

		var response = jqxhr.responseText;

		response = JSON.parse(response);;

		console.log(response);
 
		res = response.Response;

		if(res.status == true){

      msg = `Dear Customer, your order has been placed successfully and the details sent to your email. Please proceed to your email to confirm purchase and make payment.`;

      alert(msg);
      
      $('#myBIModal').modal('hide');

       $('#fname').val("");
       $('#email').val("");
      $('#phnum').val("");
       $('#vol').val("");
       $('#address').val("");
      // loc = $('#loc').val();



		}
		

		})

		.fail(function () {
		var response = jqxhr.responseText;
		console.log(response);

alert("Something Went Wrong");
// alert("Fail is Currently Unavailable");
// console.log("Price is Unavailable");
		})


		.always(function () {
			// alert("always");

		});

	   
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
}


function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
	  return false;
	}else{
	  return true;
	}
}


 
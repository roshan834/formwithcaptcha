
var fname = 0;
var lname = 0;
var email = 0;
var phoneno = 0;
var file2 = 0;
var i=0;

$(document).ready(function () {
    // Regular expressions for validation
    var namePattern = /^[A-Za-z\s]+$/;
    var phonePattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    var emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.]+\.[A-Za-z]{2,}$/;

// console.log("loaded");
    //Here we disable the submit button
    $(':input[type="submit"]').prop('disabled', true);



    $('#fname,#lname,#phoneno, #email ').on('input', function () {
        var field = $(this).attr('name');
        var value = $(this).val();

        switch (field) {
            case 'fname':
                if ( !namePattern.test(value)) {
                    $('#fname-error').text('Name contains special characters or numbers.'); fname = 0;
                } else {
                    $('#fname-error').text('');
                    fname = 1;
                }
                break;
            case 'lname':
                if (!namePattern.test(value)) {
                    $('#lname-error').text('Name contains special characters or numbers.');lname = 0;
                } else {
                    $('#lname-error').text(''); lname = 1;
                }
                break;
            case 'phoneno':
                i=$('#phoneno').val().length;
                if (value !== ''&& !phonePattern.test(value) ) {
                    $('#phoneno-error').text('Phone number should only contain numbers.');phoneno = 0;
                } else if(i<10) {
                    var x=10-i;
                    $('#phoneno-error').text(`Required.Enter more ${x}digit`);phoneno = 0;
                }
                else
                {

                    $('#phoneno-error').text('');
                    phoneno = 1;
}
                break;
            case 'email':
                if (value !== '' && !emailPattern.test(value)) {
                    $('#email-error').text('Invalid email address.');email = 0;
                } else {
                    $('#email-error').text(''); email = 1;
                }
                break;
            default:
                break;
        }

    });



    $('#fname,#lname, #email, #phoneno,#submitc').on('input', function () {
        // console.log("this is captcha flag"); console.log(flag_captcha);
        if (fname && lname && email && phoneno && file2&&flag_captcha) {
         
            $(':input[type="submit"]').prop('disabled', false);
            $(':input[type="submit"]').css('background-color','#ADD8E6')  ;
        }
        else{
            $(':input[type="submit"]').prop('disabled', true);
            $(':input[type="submit"]').css('background-color','grey')  ;
        }
       

       
    });

    $('#file').on('change', function () {
        var file = this.files[0];
        if (file) {
            var fileType = file.type;
            var fileSize = Math.round((file.size/1024)/1024);
            var validTypes = ["image/jpeg", "image/png", "image/jpg"];
            var maxSize = 3 ; // 3MB




            if (validTypes.indexOf(fileType) === -1) {
                $('#file-error').text('Invalid file type. Only JPG ,JPEG and PNG allowed.');
            } else if (fileSize > maxSize) {
                $('#file-error').text(`File size exceeds the limit (3MB). Input Size is : ${fileSize}Mb`);file2 = 0;

            } else {
                file2 = 1;
                $('#file-error').text('File Uploaded').css("color", 'green'); // change color 

                
                
                if (fname && lname && email && phoneno) { /// button enable
                    
                    $(':input[type="submit"]').prop('disabled', false);
                    
                }
                else {
                    $(':input[type="submit"]').prop('disabled', true);
                    
                }



            

            }

        }
    });

  

});




//for number field

function onlyNumberKey(evt) {
    
    // Only ASCII character in that range allowed
  var p = evt.keyCode;
  i=$('#phoneno').val().length;
   if(i==10)
   {
    return(false);
   
   }
   else{
    $('#phoneno-error').text('Phone number should only contain numbers.');
    return (p>47&&p<58);
   }
   
}

//block special char
function blockSpecialChar(e) {
    var k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8   || (k >= 48 && k <= 57));
}

function onlyAlpha(a){
 
    var t=a.keyCode;
    console.log(t);
    return((t>64&&t<91)||(t>96&&t<123));
}



// captcha js  code ----------start------------------



let captcha;var uniquechar = "";
function generate() {

	// Clear old input
	$("#submitc").text("");

	// Access the element to store
	// the generated captcha
	captcha = $("#image");
	uniquechar = "";

	const randomchar =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 5; i++) {
		uniquechar += randomchar.charAt(Math.random() * randomchar.length)
	}

	// Store generated input
	$("#image").text (uniquechar);
    console.log(uniquechar);
}

function printmsg() {
	const usr_input = $("#submitc").val();
console.log(usr_input);
	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == uniquechar) {
		let s = $("#key").text("Matched");
        flag_captcha=1;
//final check 

if (fname && lname && email && phoneno && file2&&flag_captcha) {
         
    $(':input[type="submit"]').prop('disabled', false);
    $(':input[type="submit"]').css('background-color','#ADD8E6')  ;
}
else{
    $(':input[type="submit"]').prop('disabled', true);
    $(':input[type="submit"]').css('background-color','grey')  ;
}


	}
	else {
		let s = $("#key").text("RE-Enter corret captcha");
        flag_captcha=0;
        //final check

        if (fname && lname && email && phoneno && file2&&flag_captcha) {
         
            $(':input[type="submit"]').prop('disabled', false);
            $(':input[type="submit"]').css('background-color','#ADD8E6')  ;
        }
        else{
            $(':input[type="submit"]').prop('disabled', true);
            $(':input[type="submit"]').css('background-color','grey')  ;
        }
	
	}
}










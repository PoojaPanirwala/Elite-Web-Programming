//---------booking sector
$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });

//fill countries in selection option
let country=[" Where are you going? ","Toronto, Canada","Windsor, Canada",
                "Gujarat, India","Delhi, India","Banglore, India",
                "Callifornia, USA"];
country.forEach(element => {
    var option=document.createElement("option");
    option.appendChild(document.createTextNode(element));
    document.getElementById("country").appendChild(option);
});

function append(){
    $('#summary').html('');
    $('#summary').append("Adult "+$('#adult').val()+" | Child "+$('#child').val()+" | Rooms "+$('#room').val());
}

function incrementValue(index)
{
    if(index==0){
        var value = parseInt(document.getElementById('adult').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('adult').value = value;
    }
    else if(index==1){
        var value = parseInt(document.getElementById('child').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('child').value = value;
    }
    else{
        var value = parseInt(document.getElementById('room').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('room').value = value;
    }
    append();
}

function decrementValue(index)
{
        if(index==0 && document.getElementById('adult').value!=1){
            var value = parseInt(document.getElementById('adult').value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            document.getElementById('adult').value = value;
        }
        else if(document.getElementById('child').value!=0){
            var value = parseInt(document.getElementById('child').value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            document.getElementById('child').value = value;
        }
        else{
            if(document.getElementById('room').value!=1){
                var value = parseInt(document.getElementById('room').value, 10);
                value = isNaN(value) ? 0 : value;
                value--;
                document.getElementById('room').value = value;
            }
        }
        append();
}

function deselect(e) {
    $('#incr-decr').slideFadeToggle(function() {
      e.removeClass('selected');
    });    
  }

$('#summary').click(function(){
    // $('#incr-decr').css("display","block");
    if($(this).hasClass('selected')) {
        deselect($(this));               
      } else {
        $(this).addClass('selected');
        $('#incr-decr').slideFadeToggle();
      }
});

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };

function check(){
    $('#checkin').css('border','1px solid black');
    $('#checkout').css('border','1px solid black');
    if($('#checkin').val().length==0){
        $('#checkin').css('border','2px solid red');
    }
    if($('#checkout').val().length==0){
        $('#checkout').css('border','2px solid red');
    }
}

var hotelArray='{ "hotelPlatforms":['+
    '{"name":"Radisson Hotel Kandla","city":"Kutch, Gujarat","src":"assets/radission.jpg","href":"https://www.radissonhotels.com/en-us/hotels/radisson-kutch-kandla?cid=a:se+b:gmb+c:apac+i:local+e:rad+d:ind+h:INGJKAN1"},'+
    '{"name":"Taj Skyline","city":"Ahmedabad, Gujarat","src":"assets/taj.jpg","href":"https://www.tajhotels.com/en-in/taj/taj-skyline-ahmedabad/?utm_source=Google&utm_medium=Local&utm_campaign=taj-skyline-ahmedabad"},'+
    '{"name":"Surat Marriott Hotel","city":"Surat, Gujarat","src":"assets/marriott.jpg","href":"https://www.marriott.com/reservation/rateListMenu.mi?dclid=CjkKEQiA-9uNBhCHrYnwgoHy24gBEiQACMo6dPfFYJ_HVE3DozhEytRq2yv3nhusZwnFluV5u2CKPivw_wcB&defaultTab=standard"},'+
    '{"name":"Sheraton New Delhi HotelOpens in new window","city":"Saket, Delhi","src":"assets/sheraton.jpg","href":"https://www.marriott.com/hotels/travel/delsn-sheraton-new-delhi-hotel/"},'+
    '{"name":"Novotel New Delhi International Airport","city":"Airport, Delhi","src":"assets/novotel.jpg","href":"https://www.guestreservations.com/novotel-new-delhi-aerocity-hotel-an-accorhotels-brand/booking?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNH3jc-xX4qoxmfYd76tD6zDpVwpkbjAWy-DDpoYd-F2X-P7UM4SdSxoCO8QQAvD_BwE"},'+
    '{"name":"Taj Palace, New DelhiOpens in new window","city":"Chanakyapuri, Delhi","src":"assets/taj_delhi.jpg","href":"https://www.tajhotels.com/en-in/taj/taj-palace-new-delhi/"},'+
    '{"name":"The Leela Palace","city":"Bengaluru, Karnataka","src":"assets/leela.jpg","href":"https://www.theleela.com/the-leela-palace-bengaluru/"},'+
    '{"name":"The Oberoi","city":"Sivanchetti Gardens, Bengaluru","src":"assets/oberoi.jpg","href":"https://www.oberoihotels.com/hotels-in-bengaluru/?utm_source=GMBlisting&utm_medium=organic"},'+
    '{"name":"JW Marriott Hotel","city":"Ashok Nagar, Bengaluru","src":"assets/jw.jpg","href":"https://www.marriott.com/hotels/travel/blrjw-jw-marriott-hotel-bengaluru/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MzgxMzg3MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"},'+
    
    '{"name":"King Blue Hotel","city":"355 King St W, Toronto","src":"assets/king_blue.jpg","href":"https://www.expedia.ca/Toronto-Hotels-The-QUBE-Hotel-Toronto.h67589134.Hotel-Information?chkin=2021-12-27&chkout=2021-12-28&x_pwa=1&rfrr=HSR&pwa_ts=1639424168809&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jYS9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=4089&destination=Toronto%2C+Ontario%2C+Canada&destType=MARKET&neighborhoodId=6262376&trackingData=AAAAEB8RrJT2Y7Mv96odj2y31SdTdjarjAuURM-D_6GBBxaP9rIqz8f919cCahO02-01YM1T2yc8UI860jfGa_CPOFXabUe6IQHTXvmCCiR7KoWH1THy2PzLQGHLvsiMc1KpJB1jEKzTFqagNCf961zcsmzmo4xFuoyK71iMZ5shckFaEyAKCiB82jcvDrAluWYsyzFAJQmgiPgWdW1EVGAL-BH9EKI4ZX3-xkyeCuV2JrcMkOxs1AbC2iMY1eG04_LRB-pdaHpU6K5YA2egK3lTX4xDPuBLOfLd1Cvog5_FLjgrV7rylT_Zrq22zbaasmCxVcEH2kv4FjQOzs3Tb8_8SJXKLkmG_P9QwKn6e4zIc_WflcKUfOfLZOzAfjXqZVhervgFv6RG7Y8gPL5frCBYLiCGuSOvFG9mWCYAA_jvShciYlS5crZkXMWIhiUtAiHGjr1iu-BHzzZrkVGmVElqP5u5CvyfA2_nzpnBCEDvNv-7EbA_JUFMi-sCPdyVoYlY_W6IJqFW2jgSO_OFDpsPuPRWTKuDevBJ96I4drMknUGUM51rY2hcjDWXDksrPWr87njotaa1RSvQ8BAO2XyXU69OaTBvqOTNxxTkPtltXHvY6N7ulv1iklZnd5lMaRmow2voL4g1xLfyZAoaXPjyGGCA6pMdT_rHCGEcNDrQCFwbUm8AvB6Ci75NBnRJKW61Jpu9W1fb8Sk8qje2hjnAGShxT7Q2rfUNFnEO74Aedak_B1C1d15dpbYloKduJSYvwuH1XgWpti1aCTmFeTQ0W0wxeEIS_TAlMseF5X3-6dhSLAaWTfZK-KWQJ6VF8GOxxQVFnuatQeb9PnEAdwlfmIyfoWIevpEkgrAcUr83T-MaJ2GldEzB4qo0nNSC94UTJFRVpV7upBu3Ja-gVgCeNboxMG7oTjdxhjpOqPw8M9k5NECaL5OoBIao1Hu8eMn8a1i_pF_IO-t0kxZ_XeuKH3g4PSGIE70IXcFuIQH-sAV45LJohE5T0Og1cM-1Fw6aGA%3D%3D&rank=2&testVersionOverride=Buttercup%2C31936.102311.0%2C33775.98848.1%2C38414.114301.0%2C40794.121819.2%2C38427.115718.1%2C42444.123988.0%2C42876.124630.1%2C42973.124182.1%2C42974.123984.1%2C42975.124629.0%2C42976.124633.0%2C42802.123925.0%2C33739.99567.0%2C37898.109354.1%2C37930.119094.0&slots=HSR_AA&position=2&beaconIssued=2021-12-13T19%3A36%3A07&sort=RECOMMENDED&top_dp=207&top_cur=CAD&semcid=CA.UB.GOOGLE.DT-c-EN.HOTEL&SEMDTL=a111848848892.b1114449719599.g1kwd-20151516792.l1.e1c.m1CjwKCAiA-9uNBhBTEiwAN3IlNHZNSKecr8uokctXHHIczfecQ2cboBhLzpZLcFiUncfNlkEiGy_UrRoCTx8QAvD_BwE.r100ecc7a2cf5a94d79a4d95347cc45ebed7628755a21bb90ccd70548ac26f92a7.c1flgvaCFmOsDa9iOSeQrEIg.j19000992.k1.d1486358396296.h1b.i1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNHZNSKecr8uokctXHHIczfecQ2cboBhLzpZLcFiUncfNlkEiGy_UrRoCTx8QAvD_BwE&semdtl=&userIntent=&selectedRoomType=315648173&selectedRatePlan=384203866"},'+
    '{"name":"The Omni King Edward Hotel","city":"37 King St E, Toronto","src":"assets/king.jpg","href":"https://www.omnihotels.com/hotels/toronto-king-edward"},'+
    '{"name":"Fairmont Royal York","city":"100 Front St West, Toronto","src":"assets/fairmont.jpg","href":"https://www.fairmont.com/royal-york-toronto/?goto=fiche_hotel&code_hotel=A551&merchantid=seo-maps-CA-A551&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&y_source=1_MTIzNjE0MTEtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"},'+
    '{"name":"Best Western Plus Waterfront Hotel","city":"277 Riverside Drive West, Windsor","src":"assets/waterfront.jpg","href":"https://www.bestwestern.com/en_US/book/hotel-rooms.66117.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:66117"},'+
    '{"name":"Stonecroft Inn","city":"3032 Dougall Ave, Windsor","src":"assets/stonecroft.jpg","href":"http://www.stonecroftinn.com/"},'+
    '{"name":"TownePlace Suites by Marriott Windsor","city":"250 Dougall Ave, Windsor","src":"assets/taj_delhi.jpg","href":"https://www.marriott.com/hotels/travel/yqgts-towneplace-suites-windsor/?gclid=CjwKCAiA-9uNBhBTEiwAN3IlNEQpbyUQA0bfyBq46_L8iHMX07G7RnnMhJbEGXo4KWSxoMiSK9r5WhoCnroQAvD_BwE&gclsrc=aw.ds"},'+
    '{"name":"Hotel Corque","city":"400 Alisal Road, Solvang, Callifornia","src":"assets/corque.jpg","href":"https://www.hotelcorque.com/"},'+
    '{"name":"Adelaide Inn","city":"1215 Ysabel Avenue, Paso Robles, Callifornia","src":"assets/adelaide.jpg","href":"https://www.adelaideinn.com/"}]}';
    var hotelJson=JSON.parse(hotelArray);

function searchHotel(){    
    var count=0;
    $('#hotellist').empty();
    hotelJson.hotelPlatforms.forEach(element => {
        if(element.name.toLowerCase().indexOf($('#country').val().split(',')[0].toLowerCase()) > -1 || element.city.toLowerCase().indexOf($('#country').val().split(',')[0].toLowerCase()) > -1)
        {                
            let text='<li><img src="'+element.src+'"><br><a href="'+element.href+'" target="blank">'+element.name+'</a><br>'+element.city+'</li>';
            $('#hotellist').append(text);
            count++;
        }
    });  
    if(count==0){
        hotelJson.hotelPlatforms.forEach(element => {
                let text='<li><img src="'+element.src+'"><br><a href="'+element.href+'" target="blank">'+element.name+'</a><br>'+element.city+'</li>';
                $('#hotellist').append(text);
        });  
    }      
}

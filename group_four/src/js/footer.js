/* 
* @Author: Marte
* @Date:   2017-07-29 09:04:58
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-29 16:26:07
*/

    window.onload = function(){
        var z_arr1 = ['Customer Service','Shopping Guide','Return Policy','FAQ','shipping','Contact Us'];
        var z_arr2 = ['Company Info','About Us','Why Buy From Us','Privacy & Securiry Policy','Term of Use'];
        var z_arr3 = ['Make Money With Us','Wholesale','Points & Coupon Gifts'];
        var z_arr4 = ['Join our community','Add us','on facebook','Follow us','on twitter','Read us','on our offcial blog'];
        var ul1 = document.createElement('ul');
        var ul2 = document.createElement('ul');
        var ul3 = document.createElement('ul');
        var ul4 = document.createElement('ul');
        z_arr1.forEach(function(item,z_idex){
            // console.log(item);
            // var li = document.createElement('li');
            if(z_idex == 0){
                ul1.innerHTML = '<h4>' + item + '</h4>';
            }else{
                ul1.innerHTML += '<li>'+'<a href="#">'+ item +'</a>'+ '</li>';
            }
              
        });
        z_dv1.appendChild(ul1);
        for(var i =0;i <=3;i++){
            if(i==0){
            var z_title = document.createElement('h4');
                z_title.innerHTML = z_arr2[0];
                // console.log(z_arr2[0]);
                ul2.appendChild(z_title);
            }else{
                // console.log(8888)
            var z_li = document.createElement('li');
            z_li.innerHTML = '<a href="#">'+z_arr2[i]+'</a>';
            ul2.appendChild(z_li);
            z_dv2.appendChild(ul2);
            }
        }
        z_arr3.forEach(function(item,z_idex){
            // console.log(item);
            // var li = document.createElement('li');
            if(z_idex == 0){
                ul3.innerHTML = '<h4>' + item + '</h4>';
            
            }else{
                ul3.innerHTML += '<li>'+'<a href="#">'+ item +'</a>'+ '</li>';
            }   
        });
        z_dv3.appendChild(ul3)
        z_arr4.forEach(function(item,z_idex){
            // console.log(item);
            // var li = document.createElement('li');
            if(z_idex == 0){
                ul4.innerHTML = '<h4>' + item + '</h4>';
            
            }else if(z_idex%2 != 0){
                ul4.innerHTML +='<p>'+item+'</p>';
            }else if(z_idex%2 == 0){
                ul4.innerHTML += '<li>'+'<a href="#">'+ item +'</a>'+ '</li>';
            }   
        });
        z_dv4.appendChild(ul4);
    }


// document.addEventListener('DOMContentLoaded',function(){
//     var status = 'under100';
//     var navbar = document.getElementById('Nav');
// 	var list = document.getElementById('list');
//     window.addEventListener('scroll',function(){
//         if ( window.pageYOffset > 100){
//             if ( status == 'under100') {
//                 status = 'over100';
//                 navbar.classList.add('fixedTop');
//                 navbar.classList.add('animated');
//                 navbar.classList.add('fadeInDown');
//             }
//         }
//         else if ( window.pageYOffset < 100) {
//             if ( status == 'over100' ) {
//                 status = 'under100';
//                 navbar.classList.remove('fixedTop');
//                 navbar.classList.remove('animated');
//                 navbar.classList.remove('fadeInDown');
//             }
//         }
//     })
// },false);

 $(function(){
 	khoimonan = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});

	khoimonan.imagesLoaded().progress( function() {
	  khoimonan.isotope('layout');
	});

	$('.tieudect a').click(function() {
		dulieu = $(this).data('monan');
	//	console.log(dulieu);
		khoimonan.isotope({ filter:  dulieu })
		 return false ;
	});

	// xu ly phan responsive bang jquery .
	// tinh ra so div ten .motmon

	//soluongmon = $('.motmon').length ;
	//docao = soluongmon* 120;
	//console.log(docao );

	//$('.noidungct').css({'height':docao})

	// xem div .motmon co ton tai hay khong

	 new WOW().init();
})

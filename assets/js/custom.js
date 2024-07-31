(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


  // Acc
    $(document).on("click", ".naccs .menu div", function() {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
          $(".naccs .menu div").removeClass("active");
          $(".naccs ul li").removeClass("active");

          $(this).addClass("active");
          $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
          $(".naccs ul").height(listItemHeight + "px");
        }
    });


	$('.owl-listing').owlCarousel({
		items:1,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:1
			  },
			  1000:{
				  items:1
			  },
			  1600:{
				  items:1
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	let translations ={
    en : {
      home : 'Home',
      about :' About',
      products : 'Products',
      contact : 'Contact Us',
      trailers: 'TRAILERS',
      containers:'CONTAINERS',
      metal:'METAL FABRICATION',
      steel:'STEEL STRUCTURES',
      tanks:'TANKS',
      copyright:'Copyright © 2024 Metal Fabrication Workshop Co., Ltd. All Rights Reserved.',
      mail:'Mail',
      phone:'Phone',
      adress:'Adress',
      linkedin:'LinkedIn',
      tiktok:'TiTkok',
      face:'Facebook',
      insta:'Instagram',
      social:'Social Media',
      logoAndSolgan:'Metal Fabrication Workshop Company ... Strength of Iron, Precision in Execution, and Greatness in Projects',
      check:'Check Them Out !',
      clients:'Our Clients',
      tanksDesc:'We manufacture strong, durable, long-lasting tanks with high quality to store liquids, fuels, etc. in different shapes and sizes upon request.',
      tanksTitle:'High Quality Tanks In Different Sizes And Shapes',
      steelDesc:'We manufacture steel structures and implement their projects, and we also design them according to the client’s desire',
      steelTitle:'Design And Manufacture Of Steel Structures, Hangars And Metal Projects',
      metalDesc:'Using the latest and most accurate technologies, we can shape metal to create the pieces you need, no matter how complex they are !',
      metalTitle:'Customized Metal Forming With Fast Execution And High Accuracy',
      containersDesc:'You can order steel containers in the shape and size that suit your needs',
      containersTitle:'Containers Of Different Capacities And High Quality',
      trailersDesc:'We can manufacture durable and strong trailers with high quality and capacity suitable for your needs Never hesitate to contact us',
      trailersTitle:'Carefully Designed Trailers To Fit Different Cargoes And Liquids',
      discover:'Discover More',
      welcome:'Welcome to',
      title:'Metal Fabrication Workshop Company',
      slogan:'Strength of Iron, Precision in Execution, and Greatness in Projects',
      contactSubTitle:'Keep in touch with us',
      contactTitle:'Feel free to send us a message about your business needs',
      contactFirstLine:'With years of extensive experience, we are always here to help you get the best metal industries.',
      contactSecondLine:'Never hesitate to contact us...',
      contactTherdLine:'We will always be here and ready to respond to your inquiries with great enthusiasm.',
      contactAdress:'Adress : Al-Jawhara District, JJJA 3201, 3201 Shukr Abu Al-Futouh, 6556, Jeddah 22416, Saudi Arabia',
      contactPhone:'Phone : +966 55 562 7125',
      contactMail:'Mail : ',
      aboutSubTitle:'Discover More About Our Vision and Values',
      aboutTitle:'About Us - Our Company Overview',
      aboutFirst:'With over 45 years of experience, our company stands at the forefront of the industrial and construction sectors. We take pride in our steadfast commitment to producing high-quality products that excel in local markets and make a distinct impact on international markets.',
      aboutSecond:'Our expertise spans a wide range of industrial fields, and our products are proudly distributed throughout most Gulf countries and Yemen. This extensive reach is a testament to the trust and satisfaction we have earned from our clients over the decades.',
      aboutThird:'At our company, we are driven by a relentless pursuit of excellence, constantly striving to enhance our administrative and engineering practices.',
      aboutForth:"Our goal is simple yet profound: to exceed our clients' expectations and deliver exceptional value.'",
      aboutFifth:'Join us as we continue to innovate and lead, setting new standards for quality and performance in the industry.',
      aboutSixth:'Metal Fabrication Workshop Company , Jeddah - KSA',

      
    },
    ar : {
      home: 'الرئيسية',
      about: 'من نحن ؟',
      products: 'منتجاتنا',
      contact: 'اتصل بنا',
      trailers: 'المقطورات',
      containers: 'الحاويات',
      metal: 'تشكيل المعادن',
      steel: 'الهياكل الفولاذية',
      tanks: 'الخزانات',
      copyright: 'حقوق الطبع والنشر © 2024 شركة ورشة الصناعات المعدنية. جميع الحقوق محفوظة.',
      mail: 'البريد الإلكتروني',
      phone: 'الهاتف',
      adress: 'العنوان',
      linkedin: 'لينكدإن',
      tiktok: 'تيك توك',
      face: 'فيسبوك',
      insta: 'إنستغرام',
      social: ' تابعنا على وسائل التواصل الاجتماعي',
      logoAndSolgan: 'شركة ورشة الصناعات المعدنية ... قوة الحديد، دقة التنفيذ، وعظمة المشاريع',
      check: 'إليك نبذة عنهم !',
      clients: 'عملاؤنا',
      tanksDesc: 'نصنع خزانات قوية , تدوم طويلاً , بجودة عالية لتخزين السوائل والوقود بأشكال وأحجام مختلفة حسب الطلب.',
      tanksTitle: 'خزانات عالية الجودة بأحجام وأشكال مختلفة',
      steelDesc: 'نقوم بتصنيع الهياكل الفولاذية وتنفيذ مشاريعها، ونقوم أيضًا بتصميمها حسب رغبة العميل.',
      steelTitle: 'تصميم وتصنيع الهياكل الفولاذية والمستودعات والمشاريع المعدنية',
      metalDesc: 'نستخدم أحدث التقنيات وأكثرها دقة لتشكيل المعادن وإنشاء القطع التي تحتاجها، بغض النظر عن مدى تعقيدها!',
      metalTitle: 'تشكيل المعادن المخصص بتنفيذ سريع ودقة عالية',
      containersDesc: 'يمكنك طلب حاويات فولاذية بالشكل والحجم المناسبين لاحتياجاتك.',
      containersTitle: 'حاويات بسعات مختلفة وعالية الجودة',
      trailersDesc: 'نستطيع تصنيع مقطورات متينة وقوية بجودة عالية وسعة مناسبة لاحتياجاتك. لا تتردد في الاتصال بنا أبدًا.',
      trailersTitle: 'مقطورات مصممة بعناية لتناسب مختلف البضائع والسوائل',
      discover: 'اكتشف المزيد',
      welcome: 'مرحبًا بك في',
      title: 'شركة التشكيل المعدني للحدادة',
      slogan: 'قوة الحديد، دقة التنفيذ، وعظمة المشاريع',
      contactSubTitle: 'ابقى على تواصل معنا',
      contactTitle: 'لا تتردد في إرسال رسالة حول احتياجات عملك',
      contactFirstLine: 'بخبرة تمتد عبر سنوات طويلة، نحن دائمًا هنا لمساعدتك في الحصول على أفضل الصناعات الحديدية.',
      contactSecondLine: 'لا تتردد أبدًا في التواصل معنا...',
      contactTherdLine: 'سنكون هنا دائمًا وجاهزين للرد على استفساراتكم بشغف كبير.',
      contactAdress: 'العنوان: حي الجوهرة، JJJA 3201، 3201 شكر أبو الفتوح، 6556، جدة 22416، المملكة العربية السعودية',
      contactPhone: 'الهاتف : 966555627125+',
      contactMail: 'البريد الإلكتروني: ',
      aboutSubTitle:'اكتشف مزيداً عن رؤيتنا وقيمنا',
      aboutTitle:'من نحن - نبذة عن شركتنا',
      aboutFirst:'بفضل خبرتنا التي تمتد لأكثر من 45 عامًا، تقف شركتنا في طليعة قطاع الصناعة والإنشاء. نحن نعتز بالتزامنا الراسخ في تصنيع منتجات ذات جودة عالية تتفوق في الأسواق المحلية وتترك بصمة واضحة في الأسواق الدولية.',
      aboutSecond:'تتنوع خبراتنا لتشمل مجموعة واسعة من المجالات الصناعية، وتنتشر منتجاتنا بفخر في معظم دول الخليج بالإضافة إلى اليمن. إن هذا الانتشار الواسع هو شهادة على الثقة والرضا الذي نلناه من عملائنا على مر العقود.',
      aboutThird:'في شركتنا، نعمل بدافع من السعي المستمر نحو التميز، ونسعى جاهدين لتعزيز ممارساتنا الإدارية والهندسية بشكل دائم.',
      aboutForth:"هدفنا بسيط لكنه عميق: تجاوز توقعات عملائنا وتقديم قيمة استثنائية.",
      aboutFifth:'انضم إلينا بينما نواصل الابتكار والريادة، محددين معايير جديدة للجودة والأداء في الصناعة.',
      aboutSixth:'التشكيل المعدني للحدادة , جدة - المملكة العربية السعودية',
    }
  };

  const langSelector = document.getElementById('lang-select');
  langSelector.addEventListener('change',event => {
    setLang(event.target.value);
    localStorage.setItem('lang' , event.target.value);
  });
  document.addEventListener('DOMContentLoaded' , ()=>{
    setLang(localStorage.getItem('lang'));
  });
  const setLang = (language)=>{
     const elements = document.querySelectorAll('[data-trans]');
     elements.forEach((element)=>{
      const elementTransKey = element.getAttribute('data-trans');
      element.textContent = translations[language][elementTransKey];
     });
     if(language == 'ar'){
      document.dir = 'rtl';
      document.body.style.fontFamily = "'El Messiri', sans-serif";

     }else{
      document.dir = 'ltr';
      document.body.style.fontFamily = "'Montserrat', sans-serif";
     }
     selcetOption(language);
  };
  function selcetOption(language){
    document.getElementById('lang-select').value = language;
  }

})(window.jQuery);
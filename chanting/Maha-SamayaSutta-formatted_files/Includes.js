var injecthead = '';injecthead += '<link rel="shortcut icon" href="../../favicon.gif" />';injecthead += '<meta name="viewport" content="width=device-width, initial-scale=1">';/* if it is *not* ABTif( window.location.protocol!=="https:"){injecthead += '<style type="text/css">.php {display:none;}</style>';}*/// if it *is* ABTif( window.location.protocol=="https:"){injecthead += '<style type="text/css">.Notice {display:none;}</style>';}injecthead += '<script src="../../includes/jquery-3.1.1.min.js"></script>';document.write(injecthead);//show-hide mainly for flipbookfunction hide(d) {if(d.length < 1) { return; }document.getElementById(d).style.display = "none";}function show(d) {if(d.length < 1) { return; }document.getElementById(d).style.display = "block";}function showhide(d) {if(d.length < 1) { return; }if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }else { document.getElementById(d).style.display = "none"; }}
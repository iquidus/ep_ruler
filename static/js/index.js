exports.postAceInit = function(hook_name, args, cb){
	if($('#rulermenu').val() != 'none' ){
		rulerSetPosition($('#rulermenu').val());
		rulerSetColor();
		rulerShow();
	}
};
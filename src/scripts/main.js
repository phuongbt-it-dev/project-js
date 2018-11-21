$(window).scroll(function () {
	getCountUP()
})

$(window).resize(function () {
	getCountUP()
})
$(document).ready(function () {
	getCountUP()
})

function getCountUP() {
	$('[data-count]').each(function () {
		var elm = $(this).offset().top
		var docS = $(window).scrollTop()
		var docH = $(window).height()
		var num = $(this).attr('data-count')
		var f = $(this).attr('data-from')
		var run = false

		// console.log(elm, docS, docH)
		$(this).text(f)
		if (elm < ((docS + docH) - 200) && !run) {
			// $(this).text(num)
			var $this = $(this),
				countTo = num,
				durationTo = 3000;
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
					run = true
				}
			});
		} else {
			$(this).text(f)
		}
	})
}

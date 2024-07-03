/**
 *
 * @param {*} name 要获取cookie的名称
 * @returns
 */
function get_cookie(name) {
	// 获取所有cookie项（用分号+空格分隔）
	var cookies = document.cookie.split("; ");

	// 遍历每个cookie，查找目标名称的cookie
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];

		// 判断此cookie是否为目标名称的cookie
		if (cookie.indexOf(name + "=") === 0) {
			// 如果是，则返回cookie值
			return decodeURIComponent(cookie.substring(name.length + 1));
		}
	}

	// 如果未找到目标cookie，则返回null
	return null;
}

/**
 *
 * @param {string} name 要设置的cookie名称
 * @param {string} value 要设置的值
 * @param {number} days 设置的时间 单位 天 默认为会话级别
 */

function set_cookie(name, value, days) {
	var expires = "";

	if (days) {
		if (days === -1) {
			// 设置为永不过期
			expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		} else {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
	}

	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

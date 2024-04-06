export const mobile = {
	rule: /^1[3456789]\d{9}$/,
	errMsg: "手机号格式不正确"
};

export const code = {
	rule: /^\d{6}$/,
	errMsg: "验证码格式不正确"
};

export const email = {
	rule: /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/,
	errMsg: "邮箱格式不正确"
};

export const password = {
	rule: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
	errMsg: "密码不低于6位，至少包含字母和数字"
};

export const idcard = {
	rule: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/,
	errMsg: "身份证号不合法"
};

export const number = {
	rule: /^\d+(\.\d{0,10})?$/, // /^(\-)?\d+(\.\d{0,9})?$/ 带负数
	errMsg: "数字不合法"
};

export default {
	mobile,
	email,
	password,
	idcard,
	number
};

/**
 * making a call. 拨打电话.
 *
 * @param phone Phone number. 电话号码.
 */
const callPhone = (phone: string) => {
	const aElement = document.createElement('a');
	aElement.setAttribute('href', `tel:${phone}`);
	document.body.appendChild(aElement);
	aElement.click();
	document.body.removeChild(aElement);
};

export default callPhone;

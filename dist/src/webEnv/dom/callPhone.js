/**
 * making a call. 拨打电话.
 *
 * @param {string} phone Phone number. 电话号码.
 */
const callPhone = (phone) => {
    const aElement = document.createElement('a');
    aElement.setAttribute('href', `tel:${phone}`);
    document.body.appendChild(aElement);
    aElement.click();
    document.body.removeChild(aElement);
};
export default callPhone;
//# sourceMappingURL=callPhone.js.map
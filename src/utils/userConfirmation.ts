import { getDate } from  './date';

export const confirmation = localStorage.getItem('email-confirmation-sent');
export const confirmationCount = localStorage.getItem('email-confirmation-sent-count');
export const confirmationDate = localStorage.getItem('email-confirmation-sent-date');

export const setEmailConfirmationLocalData = () => {
    localStorage.setItem('email-confirmation-sent', false);
    localStorage.setItem('email-confirmation-sent-count', 0);
    localStorage.setItem('email-confirmation-sent-date', getDate());
}

export const confirmationResend = localStorage.getItem('email-confirmation-sent-resend');
export const confirmationResendDate = localStorage.getItem('email-confirmation-sent-resend-date');
export const confirmationResendCount = localStorage.getItem('email-confirmation-sent-resend-count');

export const setEmailConfirmationLocalDataResend = () => {
    localStorage.setItem('email-confirmation-sent-resend', false);
    localStorage.setItem('email-confirmation-sent-resend-date', getDate());
    localStorage.setItem('email-confirmation-sent-resend-count', '0');
}

export default setEmailConfirmationLocalData;

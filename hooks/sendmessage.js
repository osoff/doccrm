import { chatId, tokenBot } from "@constants";

const baseUrl = `https://api.telegram.org/bot${tokenBot}/`;

export async function sendMessage(message) {
  const userAgent = navigator.userAgent;
  const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${message}%0AАгент: ${userAgent}`;
  const res = await fetch(url);
}

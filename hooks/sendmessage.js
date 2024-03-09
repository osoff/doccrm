import { chatId, tokenBot } from "@constants";

const baseUrl = `https://api.telegram.org/bot${tokenBot}/`;

export async function sendMessage(message) {
  const url = `${baseUrl}sendMessage?chat_id=${chatId}&text=${message}`;
  const res = await fetch(url);
  if (res.status !== 200) {
    throw new Error("err send message");
  }
}

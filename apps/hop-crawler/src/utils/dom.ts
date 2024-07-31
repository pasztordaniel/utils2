import { JSDOM } from 'jsdom';

export const findElementByText = (dom: JSDOM[], text: string): JSDOM | null =>
  dom.find((d) => d.window.document.body.textContent?.includes(text)) || null;

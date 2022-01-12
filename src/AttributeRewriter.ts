export default class AttributeRewriter {
  private nonce: string;

  constructor(nonce: string) {
    this.nonce = nonce;
  }

  element(element: Element) {
    element.setAttribute("nonce", this.nonce);
  }
}

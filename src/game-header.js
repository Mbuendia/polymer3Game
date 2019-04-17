// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class GameHeader extends LitElement {


    static get styles() {
        return css`
        :host {
          display: block;
          background-color: #5a8e9e;
          position: absolute;
          top: 0;
          width: 100%
        }`;
      } 

    // properties getter
    static get properties() { 
        return { 
          title: { type: String }
        };
      }
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <!-- template content -->
      <h2>${this.title}</h2>
    `;
  }
}
// Register the new element with the browser.
customElements.define('game-header', GameHeader);
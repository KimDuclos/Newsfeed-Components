// Because classes are not hoisted you will need to start your code at the bottom of the page.  
//Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.domElement.expBtn = this.domElement.querySelector('.expandButton');
    //const expBtn = document.querySelectorAll('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.domElement.expBtn.innerHTML = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.domElement.expBtn.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.article.classList.toggle('article-open');
    this.domElement.expBtn.innerHTML = 'close';
    //this.domElement.closeBtn.classList.toggle('.close');
  }

  closeArticle() {
    this.domElement.article.classList.toggle('close');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  */

let articles = document.querySelectorAll('.article');

/*- With your selection in place, now chain .forEach() on to the articles variable to iterate over the 
articles NodeList and create a new instance of Article by passing in each article as a parameter to the 
constructor.
*/

articles.forEach(article => new Article(article));

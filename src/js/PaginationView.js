class pagionationView {
    _parentElement = document.querySelector('.pagination')
    _data

    render(data){
      if(!data || (Array.isArray(data)&& data.length === 0))return this.errorMessage()
      this._data = data
      const markup = this._generateMarkup();
      this._parentElement.insertAdjacentHTML('afterbegin',markup)

    }

    adaHandler(handler){
      this._parentElement.addEventListener('click',function(e){
        const btn = e.target.closest('.btn--inline')
        console.log(btn)
        if(!btn)return;

        const goToPage = btn.dataset.goto //getting the button number 
        handler(goToPage)//calling the controlPagination function to essentially change the number when pressed 


      })    }

    
    _generateMarkup(){
        //getting the current page and the number of pages 
        const curPage = this._data.page;
        const numPages = this._data.coins.coins.length/this._data.resultsPerPage
        //page1 and there is other pages
        if(curPage ==1 && numPages > 1){
            return `
            <button data-goto = "${curPage+1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage+1}</span>
            <svg class="search__icon">
              <use href=#icon-arrow-right"></use>
            </svg>
          </button>`
        }
        //last page
        if(curPage == numPages && numPages > 1){
            return `button data-goto = "${curPage-1}"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage-1}</span>
          </button>`
        }

        //other page
        if(curPage < numPages){
            return `<button data-goto = "${curPage-1}"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage-1}</span>
          </button>
          <button data-goto = "${curPage+1}"class="btn--inline pagination__btn--next">
            <span>Page ${curPage +1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
            `
        }
    }
}

export default new pagionationView()
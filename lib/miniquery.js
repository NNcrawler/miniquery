class SweetSelector{
  static select(stringSelector){
    let result = null;
    if(typeof stringSelector == 'string' || stringSelector instanceof String){
      if(stringSelector[0]=='#'){
        result = document.getElementById(stringSelector.slice(1, stringSelector.length))
      }else if(stringSelector[0]=='.'){
        result = document.getElementsByClassName(stringSelector.slice(1, stringSelector.length))
      }else{
        result = document.getElementsByTagName(stringSelector)
      }
      return result
    }
  }
}

class DOM{
  static hide(stringSelector){
    let element = SweetSelector.select(stringSelector);

    if(element[0]){
      for (let i=0; i<element.length; i++) {
        //console.log(element[i]);
        element[i].style.visibility = 'hidden'
      }
    }else{
      element.style.visibility = 'hidden'
    }
  }

  static show(stringSelector){
    let element = SweetSelector.select(stringSelector);
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        element[i].style.visibility = 'visible'
      }
    }else{
      element.style.visibility = 'visible'
    }
  }

  static addClass(stringSelector, classAder){
    let element = SweetSelector.select(stringSelector);
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        element[i].setAttribute('class', `${stringSelector.slice(1, stringSelector.length)} ${classAder}`)
      }
    }else{
      element.setAttribute('class', `${stringSelector.slice(1, stringSelector.length)} ${classAder}`)
    }
  }

  static removeClass(stringSelector, classAder){
    let element = SweetSelector.select(stringSelector);
    if(element[0]){
      for (let i=0; i<element.length; i++) {

        let classCh = element[i].getAttribute('class').split(' ').filter((item) => {if(item!=classAder)return item}).join(' ')

        element[i].setAttribute('class', classCh)
      }
    }else{
      let classCh = element.getAttribute('class').split(' ').filter((item) => {if(item!=classAder)return item}).join(' ')

      element.setAttribute('class', classCh)
    }
  }
}

class EventDispatcher{
  static on(stringSelector, iEvent, callback){
    let element = SweetSelector.select(stringSelector);
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        //console.log(element[i]);
        element[i].addEventListener(iEvent, callback)
      }
    }else{
      element.addEventListener(iEvent, callback)
    }
  }
}

class AjaxWrapper{
  static request(option){
    let url = option.url;
    let type = option.type;
    let success = option.success;
    let fail = option.fail;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            success(this.responseText);
       }else if(this.status == 403){
         fail(this.responseText)
       }
    };
    xhttp.open(type, url, true);
    xhttp.send();
  }
}


function miniquery(stringSelector){
  return new MiniQuery(stringSelector)
}

class MiniQuery{
  constructor(stringSelector){
    this.elements = SweetSelector.select(stringSelector)
  }

  hide(){
    let element = this.elements;

    if(element[0]){
      for (let i=0; i<element.length; i++) {
        //console.log(element[i]);
        element[i].style.visibility = 'hidden'
      }
    }else{
      element.style.visibility = 'hidden'
    }
  }

  show(){
    let element = this.elements
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        element[i].style.visibility = 'visible'
      }
    }else{
      element.style.visibility = 'visible'
    }
  }

  addClass(){
    let element = this.elements;
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        element[i].setAttribute('class', `${stringSelector.slice(1, stringSelector.length)} ${classAder}`)
      }
    }else{
      element.setAttribute('class', `${stringSelector.slice(1, stringSelector.length)} ${classAder}`)
    }
  }

  removeClass(){
    let element = this.elements
    if(element[0]){
      for (let i=0; i<element.length; i++) {

        let classCh = element[i].getAttribute('class').split(' ').filter((item) => {if(item!=classAder)return item}).join(' ')

        element[i].setAttribute('class', classCh)
      }
    }else{
      let classCh = element.getAttribute('class').split(' ').filter((item) => {if(item!=classAder)return item}).join(' ')

      element.setAttribute('class', classCh)
    }
  }

  on(iEvent, callback){
    let element = this.elements
    if(element[0]){
      for (let i=0; i<element.length; i++) {
        //console.log(element[i]);
        element[i].addEventListener(iEvent, callback)
      }
    }else{
      element.addEventListener(iEvent, callback)
    }
  }

  static request(option){
    AjaxWrapper.request(option);
  }
}


const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
//    debugger;
   if (htmlElement.hasChildNodes()) {
      let arr = Array.from(htmlElement.childNodes)
      arr.forEach((child) =>{
         htmlElement.removeChild(child)
      })
   }
   let pTag = document.createElement("p");
   pTag.append(string);
   htmlElement.appendChild(pTag); 
};

htmlGenerator('Party Time.', partyHeader);

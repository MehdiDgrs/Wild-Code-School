const nameDOM = document.querySelector('.list-group ')
const alert = document.querySelector('.alert-danger');
const formDOM = document.querySelector('.form-signin')
const nameInputDOM = document.querySelector('.form-control')
const  letters = /^[A-Za-z]+$/;
const dataBrutes =() => {
return `<li class="list-group-item fixed">Eleftheria</li>
<li class="list-group-item fixed">Gennadios</li>
<li class="list-group-item fixed">Lysimachos</li>`}
// const formAlertDOM = document.querySelector('.form-alert')

const showPeople = async () => {
    try {
        const {
          data: { getAll },
        } = await axios.get('api/argonaute')
     console.log(getAll)
        const allPeople = getAll
          .map((getAll) => {
            const {   name } = getAll
            return `<li class="list-group-item">${name}</li>
    
    `
          })
          .join('')
        nameDOM.innerHTML = dataBrutes()+ allPeople
      } catch (error) {
        console.log(error)
      }
 
    }
    
    showPeople()

    
    formDOM.addEventListener('submit',(e)=> {
      e.preventDefault();
      let name = nameInputDOM.value;
      if (name.match(letters)){
     
      async function postName() {
        try {
          const response = await axios.post('api/argonaute',{name});
          alert.style.display = "none";
          
          showPeople()

          
          console.log(response);
          formDOM.reset();
        } catch (error) {
          console.error(error)
          alert.style.display = "block"
          ;
        }
      }
    
   
      postName() }
      else {
        alert.style.display = "block";
      }
    })
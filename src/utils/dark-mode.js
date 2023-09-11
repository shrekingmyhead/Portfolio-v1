const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle'); // Step 1 -> # selects elements with the id attribute. querySelectorAll means it is a node list and each element has to be looped through.
  
    // State
    const theme = localStorage.getItem('theme'); // get item method takes the key from the key value pair from the localStorage
  
    // On mount
    theme && document.body.classList.add(theme); // short circuiting -> and operator asks if theme variable is truthy and sets theme to light mode 
                                                 // on mount means it runs as soon as page is loaded or reloaded.
  
    // Handlers
    const handleThemeToggle = () => {
      document.body.classList.toggle('light-mode');  //s3->adds a class called 'light-mode' utility class to the body element when sun is clicked if does notexist
      if (document.body.classList.contains('light-mode')) {  // contains method checks if specific class list contains an element. Returns boolean
        localStorage.setItem('theme', 'light-mode'); // s4 -> localStorage is an object and setItem is a method (key, value) -> stores in memory 
      } else {
        localStorage.removeItem('theme'); //s5 -> takes the key to remove from local storage
        document.body.removeAttribute('class'); // 
      }
    };
  
    // Events
    themeToggleBtns.forEach(btn =>                      // step 2 -> forEach is a callback function so we use an arrow function. Event is click and callback 
      btn.addEventListener('click', handleThemeToggle)  // function is handleThemeToggle
    );
  };
  
  export default darkMode;  // so that it can be added to main js file



// sun buttons in both regular and mobile nav have the same id of 'theme-toggle'
// in style.css copy all the colours and make a utility class called .light-mode {paste color var}. rename light and dark var interchanged.